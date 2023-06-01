import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name!: string;
  email!: string;
  password!: string;
  re_password!: string;
  rol?: string;

  constructor(
    public authService: AuthService,
    public http: HttpClient,
    public router: Router
  ) { }
  ngOnInit(): void {
    console.log(this.authService.user);
    if (this.authService.user) {
      this.router.navigate(['/home'])
    }
  }

  register() {

    if (!this.email ||
      !this.name ||
      !this.password ||
      !this.re_password) {
      alert("TODOS LOS CAMPOS SON REQUERIDOS");
    }
    if (this.password != this.re_password) {
      alert("LAS CONTRASEÑAS DEBEN SER IGUALES");
    }
    let data = {
      email: this.email,
      name: this.name,
      password: this.password,
      rol: 'student',
    };
    this.authService.register(data).subscribe((resp: any) => {
      console.log(resp);
    });
  }

  // register teacher
  // register_teacher() {

  //   if (!this.email ||
  //     !this.name ||
  //     !this.password ||
  //     !this.re_password) {
  //     alert("TODOS LOS CAMPOS SON REQUERIDOS");
  //   }
  //   if (this.password != this.re_password) {
  //     alert("LAS CONTRASEÑAS DEBEN SER IGUALES");
  //   }
  //   let data = {
  //     email: this.email,
  //     name: this.name,
  //     password: this.password,
  //     rol: 'teacher',
  //   };
  //   this.authService.register(data).subscribe((resp: any) => {
  //     console.log(resp);
  //   });
  // }
}
