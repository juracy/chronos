import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './material/material.module'
import { TimerModule } from './timer/timer.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MaterialModule,
    TimerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
