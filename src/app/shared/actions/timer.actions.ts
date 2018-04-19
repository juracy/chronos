import { Action } from '@ngrx/store'

export enum TimerActionTypes {
  TimerReset = '[Timer] Reset',
  TimerStart = '[Timer] Start',
  TimerTic = '[Timer] Tic',
  TimerStop = '[Timer] Stop',
  TimerOver = '[Timer] Over',
}

export class TimerReset implements Action {
  readonly type = TimerActionTypes.TimerReset
  public running = false
  public timestamp = new Date()
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

export class TimerOver implements Action {
  readonly type = TimerActionTypes.TimerOver
  public running = false
  public timestamp = new Date()
}

export type TimerActions = TimerReset | TimerStart | TimerTic | TimerStop | TimerOver
