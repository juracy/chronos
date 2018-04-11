import { TimerActions, TimerActionTypes } from '../actions/timer.actions'

export interface TimerState {
  running: boolean
  timestamp: Date
  tic: number
}

export const initialState: TimerState = {
  running: false,
  timestamp: null,
  tic: 0,
}

export function timerReducer(state = initialState, action: TimerActions): TimerState {
  switch (action.type) {
    case TimerActionTypes.TimerStart:
      return { running: action.running, timestamp: action.timestamp, tic: 0 }

    case TimerActionTypes.TimerTic:
      return { running: action.running, timestamp: action.timestamp, tic: state.tic + 1 }

    case TimerActionTypes.TimerStop:
     return { running: action.running, timestamp: action.timestamp, tic: state.tic }

    default:
      return state
  }
}
