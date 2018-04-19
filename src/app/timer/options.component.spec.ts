import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { StoreModule, Store, Action } from '@ngrx/store'

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
    let actionsDispatched: Action[]

    beforeEach(() => {
      actionsDispatched = []
      spyOn(store, 'dispatch').and.callFake(action => actionsDispatched.push(action))
    })

    it('change times', () => {
      component.newMultiplier(1)

      expect(actionsDispatched[0].type).toEqual('[Timer] Reset')

      expect(actionsDispatched[1].type).toEqual('[Config] Set')
      expect((actionsDispatched[1] as ConfigSet).key).toEqual('times')
      expect((actionsDispatched[1] as ConfigSet).value).toEqual(1)
    })
  })
})
