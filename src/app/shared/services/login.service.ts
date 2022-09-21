import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { UserRequest } from '../../../User.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(user: UserRequest): Observable<any> {
    const form = new FormData;
    form.append('username', user.username);
    form.append('password', user.password);
    form.append('grant_type', user.grant_type);
    form.append('client_id', user.client_id);
    form.append('client_secret', user.client_secret);

    return this.http.post(`${this.BASE_URL}/oauth/token`, form).pipe(
      tap((token: any) => this.authService.setToken(token))
    );
  }

}
