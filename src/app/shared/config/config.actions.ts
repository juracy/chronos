import { Action } from '@ngrx/store'

export enum ConfigActionTypes {
  ConfigSet = '[Config] Set'
}

export class ConfigSet implements Action {
  readonly type = ConfigActionTypes.ConfigSet

  constructor (public key: string, public value: any) { }
}

export type ConfigActions = ConfigSet
