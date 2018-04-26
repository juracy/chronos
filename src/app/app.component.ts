import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'chronos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  version = '1.8'
}
