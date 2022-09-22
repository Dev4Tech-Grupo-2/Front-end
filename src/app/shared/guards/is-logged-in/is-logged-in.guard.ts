import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    console.log("Guarda de rota: " + isLoggedIn)

    if (isLoggedIn) {
      return true;
    }

    this.router.navigate(['landing-page']);

    return false;
  }

}
