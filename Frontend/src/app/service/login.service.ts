import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }
  loginUser(body :any): Observable<any> {
    const url = 'http://localhost:3000/api/v1/auth/login';
    return this.http.post(url, body, {});
  }

  googleUser(): Observable<any> {
    const url = 'http://localhost:3000/api/v1/auth/google';
    return this.http.get<any>(url);
  }

  fbUser(): Observable<any> {
  const url = 'http://localhost:3000/api/v1/auth/facebook';
    return this.http.get<any>(url,{});
  }


get(){}
post(){}
delete(){}
patch(){}
put(){}

}
