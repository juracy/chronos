import { Component, OnInit, OnDestroy } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { tap, takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs/Subject'

import { Store } from '@ngrx/store'

import { AppState } from '../shared/reducers'
import { FormatTimerPipe } from './format-timer.pipe'

@Component({
  selector: 'chronos-title',
  template: '{{title}}',
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
      tap(x => this.titleService.setTitle(`${this.format.transform(x.config.slot * x.config.times - x.timer.tic)} - ${this.title}`)),
      takeUntil(this.destroy),
    ).subscribe()
  }

  ngOnDestroy() {
    this.destroy.next()
  }
}
