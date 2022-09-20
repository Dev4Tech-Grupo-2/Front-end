import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment.prod';
import { UserRequest, UserResponse } from '../../User.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(user: UserRequest): Observable<UserResponse> {
    return this.http.post(`${this.BASE_URL}/oauth/token`, user).pipe(
      tap((token: any) => this.authService.setToken(token))
    );
  }

}
