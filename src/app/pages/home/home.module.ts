import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { BannerAreaComponent } from './banner-area/banner-area.component';
import { CategoryComponent } from './category/category.component';
import { HeroComponent } from './hero/hero.component';
import { CoursesHomeComponent } from './courses-home/courses-home.component';
import { EventsComponent } from './events/events.component';
import { PricingComponent } from './pricing/pricing.component';
import { CtaComponent } from './cta/cta.component';
import { HomeMainComponent } from './home-main/home-main.component';


@NgModule({
  declarations: [
    BannerAreaComponent,
    CategoryComponent,
    HeroComponent,
    CoursesHomeComponent,
    EventsComponent,
    PricingComponent,
    CtaComponent,
    HomeMainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    
  ],
  exports: [
    CtaComponent,
    BannerAreaComponent,
    CategoryComponent,
    HeroComponent,
    CoursesHomeComponent,
    EventsComponent,
    PricingComponent,
    CtaComponent,
    HomeMainComponent
  ]
})
export class HomeModule { }
