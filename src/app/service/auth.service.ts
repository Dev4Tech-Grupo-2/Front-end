import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAccountModelRequest } from 'app/model/UserAccountModelRequest';
import { UserAccountModelResponse } from 'app/model/UserAccountModelResponse';
import { environment } from 'environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  signIn(userAccountModelResponse: UserAccountModelResponse): Observable<UserAccountModelResponse> {
    return this.http.post<UserAccountModelResponse>(
      'http://localhost:8080/oauth/token',
      userAccountModelResponse
    );
  }

  signUp(userAccountModelRequest: UserAccountModelRequest): Observable<UserAccountModelRequest> {
    return this.http.post<UserAccountModelRequest>(
      'http://localhost:8080/users',
      userAccountModelRequest
    );
  }

  signed() {
    let ok = false;

    if (environment.token != '') {
      ok = true;
    }

    return ok;
  }

}
