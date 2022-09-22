import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRequest, UserResponse } from 'app/shared/models/interfaces/user.interface';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: UserRequest = {} as UserRequest
  confirmPass: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmPassword(event: any) {
    this.confirmPass = event.target.value
  }

  signUp() {

    if (this.user.password != this.confirmPass) {
      alert('As senhas estão diferentes!')
    } else {

      this.authService.signUp(this.user).subscribe(
        {
          next: (resp: UserResponse) => {
            alert('Usuário cadastrado com sucesso!')
            console.log(resp)
            this.router.navigate(['/login'])
          },
          error: (): void => alert('Erro ao cadastrar usuário:(')
        }
      )

    }
  }

}
