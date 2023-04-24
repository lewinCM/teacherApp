import { Component, OnInit } from '@angular/core';
import * as  mapboxgl from 'mapbox-gl'
import { environment } from '../../../../environments/environment';
import { Profesores } from '../interfaces/instructor-data.interfaces';



@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent implements OnInit {
  profesores: Profesores[] = [
    {
      Nombre: 'Jim Séchen',
      category: 'Art & Design',
      rating: "4.5",
      descripcion: "Soy prop en medio de formacion",
      lngLat: [-75.92722289474008, 45.280015511264466]
    },
    {
      Nombre: 'Flower Cordoba',
      category: 'Development',
      descripcion: "Full stack MEAN en formacion, soy tu mejor opcion",
      rating: "5.0",
      lngLat: [-99.91287720907991, 16.828940930185748]
    },
    {
      Nombre: 'Barry Tone',
      category: 'UX Design',
      descripcion: "Soy prop en medio de formacion",
      rating: "4.8",
      lngLat: [-58.430166677283445, -34.57150108832866]
    },
    {
      Nombre: 'Elon GatedEspaña',
      category: 'Development',
      descripcion: "Soy prop en medio de formacion",
      rating: "4.5",
      lngLat: [-3.7112735618380177, 40.42567285425766]
    },
    {
      Nombre: 'Elon Gated España',
      category: 'Development',
      descripcion: "Soy prop en medio de formacion",
      rating: "4.5",
      lngLat: [-3.7112735618380177, 40.42567285425766]
    },
    {
      Nombre: 'Elon Gated Colorado',
      category: 'Development',
      descripcion: "Soy prop en medio de formacion",
      rating: "4.5",
      lngLat: [-3.7112735618380177, 40.42567285425766]
    },
  ]







  constructor() { }
  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

}
