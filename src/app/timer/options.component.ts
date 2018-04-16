import { Component, ChangeDetectionStrategy } from '@angular/core'
import { MatSlideToggleChange } from '@angular/material'
import { Observable } from 'rxjs/Observable'

import { Store } from '@ngrx/store'

import { AppState } from '../shared/reducers'
import { ConfigSet } from '../shared/config/config.actions'

@Component({
  selector: 'chronos-options',
  templateUrl: './options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsComponent {
  sound: Observable<boolean>

  constructor(private store: Store<AppState>) {
    this.sound = store.select(state => state.config.sound)
  }

  changeSound(e: MatSlideToggleChange) {
    this.store.dispatch(new ConfigSet('sound', e.checked))
  }
}
