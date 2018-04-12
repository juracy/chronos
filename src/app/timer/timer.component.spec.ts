import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { StoreModule, Store } from '@ngrx/store'

import { reducers, metaReducers, AppState } from '../shared/reducers'
import { TimerComponent } from './timer.component'
import { FormatTimerPipe } from './format-timer.pipe'

describe('TimerComponent', () => {
  let component: TimerComponent
  let fixture: ComponentFixture<TimerComponent>
  let store: Store<AppState>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimerComponent,
        FormatTimerPipe,
      ],
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    store = TestBed.get(Store)

    fixture = TestBed.createComponent(TimerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })


  describe('should dispact actions', () => {
    let actionDispatched: string

    beforeEach(() => {
      spyOn(store, 'dispatch').and.callFake(action => action = actionDispatched = action.type)
    })

    it('timer start', () => {
      component.start()
      expect(actionDispatched).toEqual('[Timer] Start')
    })

    it('timer stop', () => {
      component.stop()
      expect(actionDispatched).toEqual('[Timer] Stop')
    })
  })
})
