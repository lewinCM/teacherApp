import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthProfileComponent } from './auth-profile.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "", component: AuthProfileComponent, children: [
      { path: "login", component: LoginComponent },
      { path: "register",
      // canActivate:[AuthGuard],
      component: RegisterComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
