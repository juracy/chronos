import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { ServiceWorkerModule } from '@angular/service-worker'

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'

import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './material/material.module'
import { TimerModule } from './timer/timer.module'

import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
import { AppEffects } from './app.effects'
import { reducers, metaReducers } from './shared/reducers'
import { timerReducer } from './shared/reducers/timer.reducer'

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
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature('timer', timerReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
