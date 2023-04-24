import { Component } from '@angular/core';


interface Profesores {
  Nombre: string;
  descripcion: string;
  lngLat: [number, number];
}
@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent {

}
