import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { StoreModule, Store } from '@ngrx/store'

import { reducers, metaReducers, AppState } from '../shared/reducers'
import { TitleComponent } from './title.component'
import { FormatTimerPipe } from './format-timer.pipe'

describe('TitleComponent', () => {
  let component: TitleComponent
  let fixture: ComponentFixture<TitleComponent>
  let store: Store<AppState>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TitleComponent,
        FormatTimerPipe,
      ],
      providers: [
        FormatTimerPipe,
      ],
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    store = TestBed.get(Store)
    spyOn(store, 'dispatch').and.callThrough()

    fixture = TestBed.createComponent(TitleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
