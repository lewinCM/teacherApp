import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = ""
  password: string = ""
  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }
  ngOnInit(): void {
    console.log(this.authService.user);
    if (this.authService.user) {
      this.router.navigate(['/home'])
    }
  }
  // formulario reactivos ojo hacerlo
  login() {
    if (!this.email) {
      alert("el email es requerido");
    }
    if (!this.password) {
      alert("el password es requerido");
    }
    this.authService.login(this.email, this.password).pipe(
      tap((result: any) => {
        console.log(result);
        this.router.navigate(["/home"]);

      }),
      catchError((error: any) => {
        console.log(error);
        return of(error); // Opcional: puedes devolver un observable de error personalizado si lo deseas
      })
    ).subscribe();
  }
}
