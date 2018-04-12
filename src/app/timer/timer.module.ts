import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialModule } from '../material/material.module'
import { TimerComponent } from './timer.component'
import { FormatTimerPipe } from './format-timer.pipe'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
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
