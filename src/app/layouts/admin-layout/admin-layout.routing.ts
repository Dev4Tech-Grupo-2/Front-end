import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from 'app/features/student/pages/create-student/create-student.component';
import { StudentComponent } from 'app/features/student/pages/student/student.component';
import { UpdateStudentsComponent } from 'app/features/student/pages/update-students/update-students.component';
import { CreateTeacherComponent } from 'app/features/teacher/pages/create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from 'app/features/teacher/pages/update-teacher/update-teacher.component';
import { UserComponent } from 'app/pages/user/user.component';
import { IsLoggedInGuard } from 'app/shared/guards/is-logged-in/is-logged-in.guard';

import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  {
    path: "admin-page",
    component: AdminLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      { path: 'dashboard', component: StudentComponent },
      { path: "create-teacher", component: CreateTeacherComponent },
      { path: "update-teacher/:id", component: UpdateTeacherComponent },
      { path: "create-student", component: CreateStudentComponent },
      { path: "update-student/:id", component: UpdateStudentsComponent },
      { path: "create-class", component: UserComponent },
    ],
  },
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class AdminLayoutRoutingModule { }
