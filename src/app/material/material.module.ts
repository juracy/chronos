import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule, MatSlideToggleModule, MatButtonToggleModule, MatToolbarModule, MatIconModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

const resources = [
  MatButtonModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatIconModule,
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
