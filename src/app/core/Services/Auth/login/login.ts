import { Injectable } from '@angular/core';
import { Config } from '../../configuration/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServices {
   private apiUrl = `${Config.BaseUrl}/api/Auth/login`;
   constructor(private http: HttpClient){}
  login(username: string, password: string,email:string) {
    const body = { username, password,email};
    return this.http.post(this.apiUrl, body,{});
    
  }
}



