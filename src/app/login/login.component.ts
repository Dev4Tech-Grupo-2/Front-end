import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountModelResponse } from 'app/model/UserAccountModelResponse';
import { AuthService } from 'app/service/auth.service';
import { environment } from 'environments/environment.prod';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin: UserAccountModelResponse = new UserAccountModelResponse

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn(){
    this.auth.signIn(this.userLogin).subscribe((resp: UserAccountModelResponse)=>{
      this.userLogin = resp

      console.log(this.userLogin)

      environment.token = this.userLogin.token
      environment.name = this.userLogin.name

      this.router.navigate(['/dashboard'])
    }, (erro: { status: number; }) =>{
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }

}
