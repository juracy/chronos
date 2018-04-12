import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { Store } from '@ngrx/store'

import { TimerStart, TimerStop } from '../shared/actions/timer.actions'
import { TimerState } from '../shared/reducers/timer.reducer'
import { AppState } from '../shared/reducers'
import { ConfigState } from '../shared/config/config.reducer'

@Component({
  selector: 'chronos-timer',
  templateUrl: './timer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  config: Observable<ConfigState>
  timer: Observable<TimerState>

  constructor(private store: Store<AppState>) {
    this.timer = this.store.select(state => state.timer)
    this.config = this.store.select(state => state.config)
  }

  start() {
    this.store.dispatch(new TimerStart())
  }

  stop() {
    this.store.dispatch(new TimerStop())
  }
}
