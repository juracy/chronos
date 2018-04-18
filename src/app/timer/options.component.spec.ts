import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { StoreModule, Store } from '@ngrx/store'

import { MaterialModule } from '../material/material.module'
import { reducers, metaReducers, AppState } from '../shared/reducers'
import { ConfigSet } from '../shared/config/config.actions'
import { OptionsComponent } from './options.component'

describe('OptionsComponent', () => {
  let component: OptionsComponent
  let fixture: ComponentFixture<OptionsComponent>
  let store: Store<AppState>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsComponent ],
      imports: [
        MaterialModule,
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    store = TestBed.get(Store)

    fixture = TestBed.createComponent(OptionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('should dispact actions', () => {
    let actionDispatched: any

    beforeEach(() => {
      spyOn(store, 'dispatch').and.callFake(action => actionDispatched = action)
    })

    it('change times', () => {
      component.newMultiplier(1)
      expect(actionDispatched.type).toEqual('[Config] Set')
      expect((actionDispatched as ConfigSet).key).toEqual('times')
      expect((actionDispatched as ConfigSet).value).toEqual(1)
    })
  })
})