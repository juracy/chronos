import { Action } from '@ngrx/store'

export enum TimerActionTypes {
  TimerStart = '[Timer] Start',
  TimerTic = '[Timer] Tic',
  TimerStop = '[Timer] Stop',
}

export class TimerStart implements Action {
  readonly type = TimerActionTypes.TimerStart
  public running = true
  public timestamp = new Date()
}

export class TimerTic implements Action {
  readonly type = TimerActionTypes.TimerTic
  public running = true
  public timestamp = new Date()
}

export class TimerStop implements Action {
  readonly type = TimerActionTypes.TimerStop
  public running = false
  public timestamp = new Date()
}

export type TimerActions = TimerStart | TimerTic | TimerStop
