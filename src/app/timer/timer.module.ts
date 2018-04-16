import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { EffectsModule } from '@ngrx/effects'

import { MaterialModule } from '../material/material.module'
import { TimerEffects } from '../shared/effects/timer.effects'
import { TimerComponent } from './timer.component'
import { OptionsComponent } from './options.component'
import { TitleComponent } from './title.component'
import { FormatTimerPipe } from './format-timer.pipe'
import { ControlsComponent } from './controls.component'

const components = [
  TimerComponent,
  OptionsComponent,
  TitleComponent,
  ControlsComponent,
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    EffectsModule.forFeature([TimerEffects]),
  ],
  declarations: [
    FormatTimerPipe,
    ... components,
  ],
  providers: [
    FormatTimerPipe,
  ],
  exports: components,
})
export class TimerModule { }
