import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';


import { AboutComponent } from './about/about.component';
import { DetailsInstructoresComponent } from './details-instructores/details-instructores.component';
import { P404Component } from './p404/p404.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    P404Component,
    AboutComponent,
    PagesComponent,
    DetailsInstructoresComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    P404Component,
    AboutComponent,

    PagesComponent,
    DetailsInstructoresComponent,
  ]
})
export class PagesModule { }
