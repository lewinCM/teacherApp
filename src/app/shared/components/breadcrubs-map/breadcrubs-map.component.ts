import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrubs-map',
  templateUrl: './breadcrubs-map.component.html',
  styleUrls: ['./breadcrubs-map.component.scss']
})
export class BreadcrubsMapComponent {
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
}
