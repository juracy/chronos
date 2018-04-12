import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { Store } from '@ngrx/store'

import { TimerStart, TimerStop } from '../shared/actions/timer.actions'
import { TimerState } from '../shared/reducers/timer.reducer'
import { AppState } from '../shared/reducers'

@Component({
  selector: 'chronos-timer',
  templateUrl: './timer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  slot = 1 * 60
  timer: Observable<TimerState>

  constructor(private store: Store<AppState>) {
    this.timer = this.store.select(state => state.timer)
  }

  start() {
    this.store.dispatch(new TimerStart())
  }

  stop() {
    this.store.dispatch(new TimerStop())
  }
}
