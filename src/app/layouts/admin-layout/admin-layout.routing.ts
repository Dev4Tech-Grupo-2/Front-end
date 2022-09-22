import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  // {
  //   path: "",
  //   component: AdminLayoutComponent,
  //   canActivate: [IsLoggedInGuard],
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () => StudentsComponent
  //     },
  //     {
  //       path: 'create-teacher',
  //       loadChildren: () => CreateStudentComponent
  //     }

  //   ],
  // },
  // { path: "teste", component: StudentsComponent },
  // { path: "user", component: UserComponent },
  // { path: "create-student", component: CreateStudentComponent },
  // { path: "update-student/:id", component: UpdateStudentsComponent },
  // { path: "create-teacher", component: CreateTeacherComponent },
  // { path: "update-teacher/:id", component: UpdateTeacherComponent },
  // { path: "table", component: TableComponent },
  // { path: "typography", component: TypographyComponent },
  // { path: "icons", component: IconsComponent },
  // { path: "maps", component: MapsComponent },
  // { path: "notifications", component: NotificationsComponent },
  // { path: "upgrade", component: UpgradeComponent },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminLayoutRoutingModule { }
