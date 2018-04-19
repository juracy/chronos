import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { Store, StoreModule, Action } from '@ngrx/store'

import { AppState, reducers, metaReducers } from '../shared/reducers'
import { MaterialModule } from '../material/material.module'
import { ControlsComponent } from './controls.component'

describe('ControlsComponent', () => {
  let component: ControlsComponent
  let fixture: ComponentFixture<ControlsComponent>
  let store: Store<AppState>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsComponent ],
      imports: [
        MaterialModule,
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    store = TestBed.get(Store)

    fixture = TestBed.createComponent(ControlsComponent)
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

    it('timer start', () => {
      component.start()
      expect(actionsDispatched[1].type).toEqual('[Timer] Start')
    })

    it('timer stop', () => {
      component.stop()
      expect(actionsDispatched[0].type).toEqual('[Timer] Stop')
    })
  })
})
