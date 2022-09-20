import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { LoginService } from 'app/service/login.service';
import { finalize } from 'rxjs';
import { UserRequest, UserResponse } from 'User.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {  

  username!: string;
  password!: string
  token!: string;
  isLoading!: boolean;
  errorLogin: boolean = false;

  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  constructor(
    private auth: AuthService,
    private loginService: LoginService,
    private router: Router
  ) { }

  onSubmit(): void {
    // this.errorLogin = false;

    // if (!form.valid) {
    //   form.controls['email'].markAsTouched;
    //   form.controls['password'].markAsTouched;

    //   if (form.controls['email'].invalid) {
    //     this.emailInput.nativeElement.focus();
    //     return;
    //   }

    //   if (form.controls['password'].invalid) {
    //     this.passwordInput.nativeElement.focus();
    //     return;
    //   }

    //   return;
    // }

    console.log("foi!")

    const user: UserRequest = {
      username: this.username,
      password: this.password,
      grant_type: "password",
      client_id: "little-geniuses-app",
      client_secret: "little-geniuses-app123"
    }

    this.login(user);
  }

  login(user: UserRequest) {
    console.log("login")
    this.isLoading = true;
    this.loginService.login(user)
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        res => this.onSuccess(res),
        error => this.onError(error)
      )
  }

  onSuccess(res: UserResponse): void {
    this.token = res.access_token;
    console.log("onSucess")

    this.router.navigate(["/dashboard"]);
  }

  onError(error: {}): void {
    this.errorLogin = true;
    console.log("Message: " + error);
  }

  showError(controlName: string, form: NgForm): boolean {
    if (!form.controls[controlName]) {
      return false;
    }

    return form.controls[controlName].invalid && form.controls[controlName].touched;
  }

}
