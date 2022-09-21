import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateStudentComponent } from './features/student/pages/create-student/create-student.component';
import { StudentComponent } from './features/student/pages/student/student.component';
import { UpdateStudentsComponent } from './features/student/pages/update-students/update-students.component';
import { CreateTeacherComponent } from './features/teacher/pages/create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './features/teacher/pages/update-teacher/update-teacher.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { IconsComponent } from './pages/icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { TableComponent } from './pages/table/table.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { UpgradeComponent } from './pages/upgrade/upgrade.component';
import { UserComponent } from './pages/user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: SignUpComponent },
  // { path: 'dashboard',      component: DashboardComponent },
  // { path: "dashboard", component: StudentComponent },
  { path: "user", component: UserComponent },
  { path: "table", component: TableComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "create-student", component: CreateStudentComponent },
  { path: "update-student/:id", component: UpdateStudentsComponent },
  { path: "create-teacher", component: CreateTeacherComponent },
  { path: "update-teacher/:id", component: UpdateTeacherComponent },
  {
    path: "",
    redirectTo: "landing-page",
    pathMatch: "full",
  },
  {
    path: "",
    component: LandingPageComponent,
  },
  {
    path: "dashboard",
    component: StudentComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then(
            (x) => x.AdminLayoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
