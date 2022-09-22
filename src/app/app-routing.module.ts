import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateStudentComponent } from './features/student/pages/create-student/create-student.component';
import { StudentComponent } from './features/student/pages/student/student.component';
import { UpdateStudentsComponent } from './features/student/pages/update-students/update-students.component';
import { StudentModule } from './features/student/student.module';
import { CreateTeacherComponent } from './features/teacher/pages/create-teacher/create-teacher.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './pages/user/user.component';
import { IsLoggedInGuard } from './shared/guards/is-logged-in/is-logged-in.guard';
import { IsLoggedOutGuard } from './shared/guards/is-logged-out/is-logged-out.guard';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: SignUpComponent, canActivate: [IsLoggedInGuard] },
  { path: "dashboard", component: StudentComponent, canActivate: [IsLoggedInGuard] },
  { path: "create-student", component: CreateStudentComponent, canActivate: [IsLoggedInGuard] },
  { path: "update-student/:id", component: UpdateStudentsComponent, canActivate: [IsLoggedInGuard] },
  { path: "create-teacher", component: CreateTeacherComponent, canActivate: [IsLoggedInGuard] },
  { path: "user", component: UserComponent, canActivate: [IsLoggedInGuard] },
  { path: "create-class", component: CreateTeacherComponent, canActivate: [IsLoggedInGuard] },
  {
    path: "",
    redirectTo: "landing-page",
    pathMatch: "full",
    canActivate: [IsLoggedOutGuard]
  },
  {
    path: "landing-page", component: LandingPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminLayoutModule,
    StudentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
