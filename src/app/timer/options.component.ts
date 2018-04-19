import { Component, ChangeDetectionStrategy } from '@angular/core'
import { MatSlideToggleChange } from '@angular/material'
import { Observable } from 'rxjs/Observable'

import { Store } from '@ngrx/store'

import { AppState } from '../shared/reducers'
import { ConfigSet } from '../shared/config/config.actions'
import { TimerState } from '../shared/reducers/timer.reducer'
import { TimerReset } from '../shared/actions/timer.actions';

@Component({
  selector: 'chronos-options',
  templateUrl: './options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsComponent {
  sound: Observable<boolean>
  timer: Observable<TimerState>

  constructor(private store: Store<AppState>) {
    this.sound = store.select(state => state.config.sound)
    this.timer = this.store.select(state => state.timer)
  }

  changeSound(e: MatSlideToggleChange) {
    this.store.dispatch(new ConfigSet('sound', e.checked))
  }

  newMultiplier(times: number) {
    this.store.dispatch(new TimerReset())
    this.store.dispatch(new ConfigSet('times', times))
  }
}
