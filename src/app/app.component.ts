import { Component } from '@angular/core';

import { AuthService } from './shared/services/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn() {
    return this.authService.getToken() != null ? true : false;
  }
}
