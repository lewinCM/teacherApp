import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpMainComponent } from './sign-up-main/sign-up-main.component';

const routes: Routes = [{ path: 'register', component: SignUpMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
