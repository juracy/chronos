import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { EffectsModule } from '@ngrx/effects'

import { MaterialModule } from '../material/material.module'
import { TimerEffects } from '../shared/effects/timer.effects'

import { TimerComponent } from './timer.component'
import { FormatTimerPipe } from './format-timer.pipe'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    EffectsModule.forFeature([TimerEffects]),
  ],
  declarations: [
    TimerComponent,
    FormatTimerPipe,
  ],
  exports: [
    TimerComponent,
  ]
})
export class TimerModule { }
