import { Component } from '@angular/core'
import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { StoreModule, Store } from '@ngrx/store'

import { AppComponent } from './app.component'
import { reducers, metaReducers, AppState } from './shared/reducers'

describe('AppComponent', () => {
  let store: Store<AppState>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
      declarations: [
        AppComponent,
        Component({selector: 'chronos-timer', template: ''}) (class MockTimerComponent { }),
        Component({selector: 'chronos-options', template: ''}) (class MockOptionsComponent { }),
      ],
    }).compileComponents()

    store = TestBed.get(Store)

    spyOn(store, 'dispatch').and.callThrough()
  }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('Chronos')
  }))
})
