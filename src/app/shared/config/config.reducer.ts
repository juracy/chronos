import { ConfigActions, ConfigActionTypes } from './config.actions'

export interface ConfigState {
  times: number
  slot: number
}

export const initialState: ConfigState = {
  times: 1,
  slot: 25 * 60
}

export function configReducer(state = initialState, action: ConfigActions): ConfigState {
  switch (action.type) {

    case ConfigActionTypes.ConfigSet:
      // TODO: Usar Map
      const newState = Object.assign({}, state)
      newState[action.key] = action.value
      return newState

    default:
      return state
  }
}
