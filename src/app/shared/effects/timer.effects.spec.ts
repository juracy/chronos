import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { ReplaySubject } from 'rxjs/ReplaySubject'

import { StoreModule, Store } from '@ngrx/store'

import { reducers, metaReducers, AppState } from '../reducers'
import { TimerEffects } from './timer.effects'
import { TimerStart } from '../actions/timer.actions'

describe('TimerService', () => {
  let actions: ReplaySubject<any> = null
  let effects: TimerEffects
  let store: Store<AppState>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
      providers: [
        TimerEffects,
        provideMockActions(() => actions),
      ],
    })

    effects = TestBed.get(TimerEffects)
    store = TestBed.get(Store)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })

  it('should emit tic one per second', () => {
    jest.useFakeTimers()
    actions = new ReplaySubject(1)
    actions.next(new TimerStart())
    store.dispatch(new TimerStart())
    const lista = []
    // spyOn(store, 'dispatch').and.callFake((x) => lista.push(x))
    effects.start.subscribe(action => lista.push(action.type))

    jest.runTimersToTime(2000)
    expect(lista).toEqual(['[Timer] Tic', '[Timer] Tic'])
  })
})
