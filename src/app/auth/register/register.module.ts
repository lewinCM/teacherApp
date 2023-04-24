import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { RegisterRoutingModule } from './register-routing.module';
import { SignUpMainComponent } from './sign-up-main/sign-up-main.component';
import { SignUpAreaComponent } from './sign-up-area/sign-up-area.component';


@NgModule({
  declarations: [
    SignUpMainComponent,
    SignUpAreaComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
