import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialModule } from '../material/material.module'
import { TimerComponent } from './timer.component'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    TimerComponent,
  ],
  exports: [
    TimerComponent,
  ]
})
export class TimerModule { }
