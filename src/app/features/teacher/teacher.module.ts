import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './components/teachers/teachers.component';
import { CreateTeacherComponent } from './pages/create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './pages/update-teacher/update-teacher.component';



@NgModule({
  declarations: [
    TeachersComponent,
    CreateTeacherComponent,
    UpdateTeacherComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports: [
    TeachersComponent
  ]

})
export class TeacherModule { }
