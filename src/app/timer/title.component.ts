import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { tap, takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs/Subject'

import { Store } from '@ngrx/store'

import { AppState } from '../shared/reducers'
import { FormatTimerPipe } from './format-timer.pipe'

@Component({
  selector: 'chronos-title',
  template: '{{title}}',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent implements OnInit, OnDestroy {
  destroy = new Subject<any>()
  title = 'Chronos Logger'

  constructor(
    private titleService: Title,
    private format: FormatTimerPipe,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(state => state).pipe(
      tap(state => {
        let title = this.title
        if (state.timer.running) {
          title = `${this.format.transform(state.config.slot * state.config.times - state.timer.tic)} - ${title}`
        }

        this.titleService.setTitle(title)
      }),
      takeUntil(this.destroy),
    ).subscribe()
  }

  ngOnDestroy() {
    this.destroy.next()
  }
}
