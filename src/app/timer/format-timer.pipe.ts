import { Pipe, PipeTransform } from '@angular/core'

import * as numeral from 'numeral'

@Pipe({
  name: 'formatTimer'
})
export class FormatTimerPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    const minutes = numeral(Math.trunc(value / 60)).format('00')
    const seconds = numeral(value % 60).format('00')

    return `${minutes}:${seconds}`
  }
}
