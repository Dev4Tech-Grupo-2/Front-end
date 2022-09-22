import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: SignUpComponent },
  {
    path: "",
    redirectTo: "landing-page",
    pathMatch: "full"
  },
  {
    path: "landing-page", component: LandingPageComponent
  },

  // {
  //   path: "admin-page", component: AdminLayoutComponent, canActivate: [IsLoggedInGuard]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
