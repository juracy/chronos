import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

const resources = [
  MatButtonModule,
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
