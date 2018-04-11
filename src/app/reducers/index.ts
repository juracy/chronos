import { environment } from '../../environments/environment'
import {
  // ActionReducer,
  ActionReducerMap,
  // createFeatureSelector,
  // createSelector,
  MetaReducer
} from '@ngrx/store'

export interface State {
  start?: void
}

export const reducers: ActionReducerMap<State> = {

}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
