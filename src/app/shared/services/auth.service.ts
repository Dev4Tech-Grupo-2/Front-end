import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';

import { LoginResponse } from '../models/interfaces/login.interface';
import { UserRequest, UserResponse } from '../models/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = environment.BASE_URL;

  token!: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signUp(userRequest: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.BASE_URL}/users`, userRequest);
  }

  setToken(tokenResponse: LoginResponse) {
    this.token = tokenResponse.access_token;
    localStorage.setItem('token', this.token);
  }

  getToken(): string | null {
    if (this.token) {
      return this.token;
    }

    const token = localStorage.getItem('token');

    if (token) {
      this.token = token;
      return this.token;
    }

    return null;
  }

  public decodePayloadJWT(): any | null {
    try {
      const token = this.getToken();
      if (token.length == 0) {
        throw new Error();
      }

      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    this.token = '';
    localStorage.clear();
    this.router.navigate([''])
  }

}
