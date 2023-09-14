import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  dashboardActive = new Subject();

  constructor(private http :HttpClient) { }

  predictionDataOfLeagues(): Observable<any> {
    const url = 'http://localhost:3000/api/v1/prediction/getAllLeagues';
      return this.http.get<any>(url,{});
    }
}
