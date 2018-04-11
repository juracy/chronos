import { environment } from '../../../environments/environment'
import {
  // ActionReducer,
  ActionReducerMap,
  // createFeatureSelector,
  // createSelector,
  MetaReducer
} from '@ngrx/store'
import { timerReducer, TimerState } from './timer.reducer'

export interface AppState {
  timer: TimerState
}

export const reducers: ActionReducerMap<AppState> = {
  timer: timerReducer,
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : []
