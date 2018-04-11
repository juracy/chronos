import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { ServiceWorkerModule } from '@angular/service-worker'

import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './material/material.module'
import { TimerModule } from './timer/timer.module'

import { AppComponent } from './app.component'

import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    MaterialModule,
    TimerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
