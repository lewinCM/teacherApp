import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapMainComponent } from './map-main/map-main.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { MiniMapaComponent } from './mini-mapa/mini-mapa.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    MapMainComponent,
    MapDetailComponent,
    MiniMapaComponent,
    FullScreenComponent,
  
    
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    SharedModule,
    HomeModule
  ],
  exports: [
    MapMainComponent
  ]
})
export class MapModule { }
