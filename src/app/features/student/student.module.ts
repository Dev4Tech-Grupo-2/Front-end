import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TeacherModule } from './../teacher/teacher.module';
import { StudentsComponent } from './components/students/students.component';
import { CreateStudentComponent } from './pages/create-student/create-student.component';
import { StudentComponent } from './pages/student/student.component';
import { UpdateStudentsComponent } from './pages/update-students/update-students.component';

@NgModule({
  declarations: [
    StudentsComponent,
    CreateStudentComponent,
    StudentComponent,
    UpdateStudentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TeacherModule
  ],
  exports: [
    StudentComponent
  ]
})
export class StudentModule { }
