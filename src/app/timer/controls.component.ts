import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { Store } from '@ngrx/store'

import { AppState } from '../shared/reducers'
import { TimerState } from '../shared/reducers/timer.reducer'
import { TimerStart, TimerStop, TimerReset } from '../shared/actions/timer.actions'

@Component({
  selector: 'chronos-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsComponent {
  timer: Observable<TimerState>

  constructor(private store: Store<AppState>) {
    this.timer = this.store.select(state => state.timer)
  }

  start() {
    this.store.dispatch(new TimerReset())
    this.store.dispatch(new TimerStart())
  }

  stop() {
    this.store.dispatch(new TimerStop())
  }
}
