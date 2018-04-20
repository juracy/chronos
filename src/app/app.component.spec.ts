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
        Component({selector: 'chronos-controls', template: ''}) (class MockControlsComponent { }),
        Component({selector: 'chronos-options', template: ''}) (class MockOptionsComponent { }),
        Component({selector: 'chronos-title', template: 'Chronos Logger'}) (class MockTitleComponent { }),
        Component({selector: 'mat-toolbar', template: '<ng-content></ng-content>'}) (class MockMaterialToolbarComponent { }),
        Component({selector: 'mat-toolbar-row', template: '<ng-content></ng-content>'}) (class MockMaterialToolbarRowComponent { }),
        Component({selector: 'mat-icon', template: ''}) (class MockMaterialIconComponent { }),
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
  it('should render title in a Toolbar tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    const elem = compiled.querySelector('header')
    expect(elem.textContent).toContain('Chronos')
  }))
})
