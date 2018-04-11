import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs/Observable'

import { StoreModule, Store } from '@ngrx/store'

import { TimerEffects } from './timer.effects'
import { reducers, metaReducers, AppState } from '../reducers'

describe('TimerService', () => {
  const actions$: Observable<any> = null
  let effects: TimerEffects
  let store: Store<AppState>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
      providers: [
        TimerEffects,
        provideMockActions(() => actions$)
      ]
    })

    effects = TestBed.get(TimerEffects)
    store = TestBed.get(Store)

    spyOn(store, 'dispatch').and.callThrough()
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
