import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TimerComponent } from './timer.component'

describe('TimerComponent', () => {
  let component: TimerComponent
  let fixture: ComponentFixture<TimerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should format timer', () => {
    // FIXME: That's wrong!
    expect(component.format(60)).toEqual('1:0')
    expect(component.format(0)).toEqual('0:0')
  })

  it('should change running perfectly', () => {
    expect(component.running.value).toBeFalsy()
    component.start()
    expect(component.running.value).toBeTruthy()
    component.stop()
    expect(component.running.value).toBeFalsy()
  })

  it('should monitor subscription', () => {
    expect(component.currentSubscription).toBeUndefined()
    component.start()
    expect(component.currentSubscription.closed).toBeFalsy()
    component.stop()
    expect(component.currentSubscription.closed).toBeTruthy()
  })

  it('should decrease timer', () => {
    jest.useFakeTimers()
    expect(component.current.value).toEqual('01:00')
    component.start()
    jest.runTimersToTime(1000)
    expect(component.current.value).toEqual('0:59')
  })
})
