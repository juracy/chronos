import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { StoreModule, Store } from '@ngrx/store'

import { MaterialModule } from '../material/material.module'
import { reducers, metaReducers, AppState } from '../shared/reducers'
import { OptionsComponent } from './options.component'

describe('OptionsComponent', () => {
  let component: OptionsComponent
  let fixture: ComponentFixture<OptionsComponent>
  let store: Store<AppState>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsComponent ],
      imports: [
        MaterialModule,
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    store = TestBed.get(Store)
    spyOn(store, 'dispatch').and.callThrough()

    fixture = TestBed.createComponent(OptionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
