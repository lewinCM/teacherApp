import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogAreaComponent } from './blog-area/blog-area.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    BlogAreaComponent,
    BlogMainComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HomeModule,
    SharedModule
  ]
})
export class BlogModule { }
