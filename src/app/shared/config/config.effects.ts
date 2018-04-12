import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { ConfigActionTypes } from './config.actions'

@Injectable()
export class ConfigEffects {

  @Effect()
  set = this.actions.pipe(
    ofType(ConfigActionTypes.ConfigSet)
  )

  constructor(private actions: Actions) {}
}
