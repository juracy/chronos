import { Component, ChangeDetectionStrategy } from '@angular/core'
import { consts } from '../environments/consts'

@Component({
  selector: 'chronos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  version = consts.version
}
