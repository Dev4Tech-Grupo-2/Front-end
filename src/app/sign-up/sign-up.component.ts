import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountModelRequest } from 'app/model/UserAccountModelRequest';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: UserAccountModelRequest = new UserAccountModelRequest
  confirmPass: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmPassword(event: any){
    this.confirmPass = event.target.value
  }

  signUp (){
    
    if(this.user.password != this.confirmPass){
      alert('As senhas estão diferentes!')
    } else {

      this.authService.signUp(this.user).subscribe((resp: UserAccountModelRequest) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')
        console.log(resp)
      })

    }
  }

}
