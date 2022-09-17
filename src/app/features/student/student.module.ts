import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './components/students/students.component';
import { CreateStudentComponent } from './pages/create-student/create-student.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentsComponent,
    CreateStudentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentModule { }
