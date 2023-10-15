import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  base_url :String = "http://localhost:3000/api/v1"
  
  get(url,query){
    try {
      let user,token;
      console.log(url)

      const options ={
        headers :{},
        params: query
      }

      if(user && user.email){
        options.headers = {
          Authorization : ""
        }
      }

      return this.http.get(this.base_url +  url ,options).pipe(
        tap((response)=>{
          return response
        },
        (err)=>{
          return err
        }
        )
      )
      
    } catch (error) {
      return error
    }
  }

  // getAllLeague(id){
  //   return this.http.get("localhost:3000/api/v1/league/1")
  // }
}
