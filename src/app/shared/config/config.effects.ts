import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { ConfigActionTypes } from './config.actions'
import { tap } from 'rxjs/operators'

@Injectable()
export class ConfigEffects {

  @Effect({ dispatch: false })
  set = this.actions.pipe(
    ofType(ConfigActionTypes.ConfigSet),
    tap(action => console.log(action.type)),
  )

  constructor(private actions: Actions) {}
}
