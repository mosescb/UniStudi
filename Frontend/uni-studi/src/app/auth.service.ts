import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  url = "http://10.53.101.241:5000/";

  public login(uname,password): Observable<any> {
    let user = {
      'uname': uname,
      'password': password
    }
    const options = {
      responseType: 'text' as const,
    };
    const base = this.http.post(this.url+'login', user,options);
    return base
  }

  sendToken(token: string) {
    localStorage.setItem('LoggedInUser', token);
  }
  getToken() {
    return localStorage.getItem('LoggedInUser');
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('LoggedInUser');
  }
}
