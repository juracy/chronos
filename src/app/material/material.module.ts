import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule, MatSlideToggleModule, MatButtonToggleModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

const resources = [
  MatButtonModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...resources,
  ],
  exports: [
    FlexLayoutModule,
    ...resources,
  ],
  declarations: []
})
export class MaterialModule { }
