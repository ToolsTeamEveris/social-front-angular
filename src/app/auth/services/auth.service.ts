import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { SERVER } from '../../app.constants';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class AuthService {
  logged = false;
  loginEmitter$: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    console.log({ username, password });
    return this.http
      .post(`${SERVER}auth/login`, { username, password }, { observe: 'response'})
      .catch((resp: HttpErrorResponse) => Observable.throw('Error con el servicio de login'))
      .map(resp => {
        localStorage.setItem('token', (resp.headers.get('Authorization')));
        this.logged = true;
        return true;
      })
  }

  register(username: string, password: string): Observable<boolean> {
    return this.http
      .post(`${SERVER}auth/register`, { username, password })
      .catch((resp: HttpErrorResponse) => Observable.throw('Error registrando usuario'))
      .map(resp => {
        console.log(resp);
        return true;
      })
  }

  isLogged(): Observable<boolean> {

    if (this.logged) {
      return Observable.of(true);
    } else if (localStorage.getItem('token')) {
      /*return this.http.get<{ok: boolean}>(`${this.urlServer}auth/token`)
        .map( response => {
          if (response.ok) {
            this.logged = true;
            return true;
          }
          return false;
        });*/
        return Observable.of(true);
    } else {
      return Observable.of(false);
    }
  }
}
