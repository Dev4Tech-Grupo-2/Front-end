import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAccountModelRequest } from 'app/model/UserAccountModelRequest';
import { Observable } from 'rxjs';
import { UserResponse } from 'User.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token!: string;

  constructor(private http: HttpClient) { }

  signUp(userAccountModelRequest: UserAccountModelRequest): Observable<UserAccountModelRequest> {
    return this.http.post<UserAccountModelRequest>(
      'http://localhost:8080/users',
      userAccountModelRequest
    );
  }

  setToken(tokenResponse: UserResponse) {
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

  // public decodePayloadJWT(): UserTokenPayload | null {
  //   try {
  //     const token = this.getToken();

  //     if (token === null) {
  //       throw new Error();
  //     }

  //     return jwt_decode(token);
  //   } catch (Error) {
  //     return null;
  //   }
  // }

  isLoggedIn(): boolean {
    return this.getToken !== null;
  }

  // logout(): void {
  //   this.token = '';
  //   localStorage.clear();
  //   this.router.navigate(['login'])
  // }

}
