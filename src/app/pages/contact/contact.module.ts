import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactMainComponent } from './contact-main/contact-main.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactAreaComponent } from './contact-area/contact-area.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ContactMainComponent,
    ContactInfoComponent,
    ContactAreaComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
