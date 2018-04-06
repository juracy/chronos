import { Component, ChangeDetectionStrategy } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subscription } from 'rxjs/Subscription'
import { timer } from 'rxjs/observable/timer'
import { tap, takeWhile, finalize } from 'rxjs/operators'

import * as numeral from 'numeral'

@Component({
  selector: 'chronos-timer',
  templateUrl: './timer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  slot = 1 * 60
  current = new BehaviorSubject<string>('01:00')
  running = new BehaviorSubject<boolean>(false)
  // TODO: Should be private (even it's necessary for tests)?
  currentSubscription: Subscription

  start() {
    this.running.next(true)
    this.currentSubscription = timer(0, 1000).pipe(
      tap(x => this.current.next(this.format(this.slot - x))),
      takeWhile(x => x < this.slot),
      finalize(() => this.running.next(false))
    ).subscribe()
  }

  stop() {
    this.running.next(false)
    this.currentSubscription.unsubscribe()
  }

  format(duration: number) {
    const minutes = numeral(Math.trunc(duration / 60)).format('00')
    const seconds = numeral(duration % 60).format('00')

    return `${minutes}:${seconds}`
  }
}
