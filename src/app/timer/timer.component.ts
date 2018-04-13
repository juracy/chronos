import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators'

import { Store } from '@ngrx/store'

import { TimerStart, TimerStop } from '../shared/actions/timer.actions'
import { TimerState } from '../shared/reducers/timer.reducer'
import { AppState } from '../shared/reducers'
import { ConfigSet } from '../shared/config/config.actions'

@Component({
  selector: 'chronos-timer',
  templateUrl: './timer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  totalTime: Observable<number>
  timer: Observable<TimerState>

  constructor(private store: Store<AppState>) {
    this.timer = this.store.select(state => state.timer)
    this.totalTime = this.store.select(state => state.config).pipe(
      map(x => x.slot * x.times),
    )
  }

  start() {
    this.store.dispatch(new TimerStart())
  }

  stop() {
    this.store.dispatch(new TimerStop())
  }

  newMultiplier(times: number) {
    this.store.dispatch(new ConfigSet('times', times))
  }
}
