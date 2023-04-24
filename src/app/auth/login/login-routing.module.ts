import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInMainComponent } from './sign-in-main/sign-in-main.component';

const routes: Routes = [{ path: 'login', component: SignInMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
