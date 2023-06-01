import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from 'src/app/config/config';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = null;
  token: any = null;
  constructor(private http: HttpClient, private router: Router) { this.getLocalStorage(); }


  getLocalStorage() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.user = JSON.parse(localStorage.getItem("user") ?? '');
    } else {
      this.token = null;
      this.user = null;
    }
  }
  // login
  login(email: string, password: string) {
    let URL = URL_SERVICIOS + "auth/login"
    return this.http.post(URL, { email, password }).pipe(
      map((resp: any) => {
        if (resp.USER_FRONTED && resp.USER_FRONTED.token) {
          //ALMACENAR EL TOKEN EN EL LOCALSTORAGE
          return this.localStorageSave(resp.USER_FRONTED)
        } else {
          //DEVUELVEME EL STATUS
          return resp;
        }
      }),
      catchError((error: any) => {
        console.log(error);
        return of(error);
      })

    )
  }

  // register
  register(data: any) {
    let URL = URL_SERVICIOS + "auth/register";
    return this.http.post(URL, data);
  }


  //
  localStorageSave(USER_FRONTED: any) {
    localStorage.setItem("token", USER_FRONTED.token);
    localStorage.setItem("user", JSON.stringify(USER_FRONTED.user));
    return true;
  }

  // salir
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(["auth/login"]);
    // location.reload();
  }

}
