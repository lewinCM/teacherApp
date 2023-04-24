import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignInMainComponent } from './sign-in-main/sign-in-main.component';
import { SignInAreaComponent } from './sign-in-area/sign-in-area.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SignInMainComponent,
    SignInAreaComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
