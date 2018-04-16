import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule, MatSlideToggleModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

const resources = [
  MatButtonModule,
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
