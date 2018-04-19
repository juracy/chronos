import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { tap, concatMap, takeWhile, withLatestFrom, filter, map } from 'rxjs/operators'
import { timer } from 'rxjs/observable/timer'

import { Store } from '@ngrx/store'

import { TimerActionTypes, TimerTic, TimerStop, TimerOver } from '../actions/timer.actions'
import { AppState } from '../reducers'

@Injectable()
export class TimerEffects {

  @Effect()
  start = this.actions.pipe(
    ofType(TimerActionTypes.TimerStart),
    tap((x) => console.log(x.type)),
    concatMap(x => timer(1000, 1000).pipe(
      withLatestFrom(this.store),
      takeWhile(([timer_tic, store]) => store.timer.running),
    )),
    map(() => new TimerTic()),
  )

  @Effect()
  tic = this.actions.pipe(
    ofType(TimerActionTypes.TimerTic),
    withLatestFrom(this.store),
    tap(([action, appState]) => console.log(action.type, appState.timer.tic)),
    // TODO: Congelar
    filter(([action, appState]) => appState.timer.tic >= appState.config.slot * appState.config.times),
    map(() => new TimerOver()),
  )

  @Effect({ dispatch: false })
  stop = this.actions.pipe(
    ofType(TimerActionTypes.TimerOver),
    withLatestFrom(this.store),
    tap(([action, appState]) => console.log(action.type)),
    filter(([action, appState]) => appState.config.sound),
    tap(() => this.play()),
  )

  // https://stackoverflow.com/questions/44883501/play-sound-in-angular-4
  private alarm = new Audio()

  constructor(private actions: Actions, private store: Store<AppState>) {
    this.alarm.src = '/assets/mp3/alarm.mp3'
  }

  play() {
    // TODO: Melhoria para tocar o mesmo áudio várias vezes sem recarregar
    this.alarm.load()
    this.alarm.play()
  }
}
