import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Student } from '../../model/student.model';
import { StudentsService } from './../../../../shared/services/students.service';

@Component({
  templateUrl: "./create-student.component.html",
  styleUrls: ["./create-student.component.scss"],
})
export class CreateStudentComponent implements OnInit {
  students: Array<Student> = [];
  student?: Student;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  formStudent: any = new FormGroup({
    name: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    fees: new FormControl(0, [Validators.required, Validators.min(50)]),
    email: new FormControl("", [Validators.required]),
    street: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required]),
    postalCode: new FormControl("", [Validators.required]),
    state: new FormControl("", [Validators.required]),
  });

  constructor(
    private router: Router,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.createStudent();
  }

  createStudent() {
    const formValue = this.formStudent.value;
    this.studentsService.create(formValue).subscribe((res) => {
      alert("Estudante criado com sucesso!");
      this.router.navigateByUrl("/dashboard");
    });
  }
}
