import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http :HttpClient) { }
  registerUser(body :any): Observable<any> {
    const url = 'http://localhost:3000/api/v1/auth/signup';
    return this.http.post(url, body, {});
  }
}
