import { environment } from '../../../environments/environment'
import {
  // ActionReducer,
  ActionReducerMap,
  // createFeatureSelector,
  // createSelector,
  MetaReducer
} from '@ngrx/store'

import { timerReducer, TimerState } from './timer.reducer'
import { configReducer, ConfigState } from '../config/config.reducer'

export interface AppState {
  timer: TimerState
  config: ConfigState
}

export const reducers: ActionReducerMap<AppState> = {
  timer: timerReducer,
  config: configReducer,
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : []
