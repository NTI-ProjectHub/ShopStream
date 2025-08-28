import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../../configuration/config';

interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      username: string;
      name: string;
      email: string;
      role: string;
    };
    token?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LoginServices {
  private apiUrl = `${Config.BaseUrl}/api/Auth/login`;

  constructor(private http: HttpClient) {}

  login(username: string, password: string, email: string): Observable<LoginResponse> {
    const body = { username, password, email };
    return this.http.post<LoginResponse>(this.apiUrl, body, { withCredentials: true });
  }
}