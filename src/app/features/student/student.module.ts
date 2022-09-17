import { TeacherModule } from './../teacher/teacher.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './components/students/students.component';
import { CreateStudentComponent } from './pages/create-student/create-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './pages/student/student.component';

@NgModule({
  declarations: [
    StudentsComponent,
    CreateStudentComponent,
    StudentComponent
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
