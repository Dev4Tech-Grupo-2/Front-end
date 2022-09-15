import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { IconsComponent } from './pages/icons/icons.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: SignUpComponent},
    {path: 'icons', component: IconsComponent},
    // {path: 'dashboard', component: AdminLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }