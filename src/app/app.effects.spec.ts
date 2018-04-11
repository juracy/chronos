import { TestBed } from '@angular/core/testing'
import { Observable } from 'rxjs/Observable'

import { provideMockActions } from '@ngrx/effects/testing'

import { AppEffects } from './app.effects'

describe('AppService', () => {
  const actions: Observable<any> = null
  let effects: AppEffects

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        provideMockActions(() => actions)
      ]
    })

    effects = TestBed.get(AppEffects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
