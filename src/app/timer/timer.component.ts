import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'chronos-timer',
  templateUrl: './timer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
