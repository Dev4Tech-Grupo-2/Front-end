import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TeachersService } from './../../../../shared/services/teachers.service';
import { Teacher } from './../../model/teacher.model';

@Component({
  selector: "app-create-teacher",
  templateUrl: "./create-teacher.component.html",
  styleUrls: ["./create-teacher.component.scss"],
})
export class CreateTeacherComponent implements OnInit {
  teachers: Array<Teacher> = [];
  teacher?: Teacher;
  idTeacher?: number;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  formTeacher: any = new FormGroup({
    name: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    street: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required]),
    postalCode: new FormControl("", [Validators.required]),
    state: new FormControl("", [Validators.required]),
    salary: new FormControl(0, [Validators.required]),
  });

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private teachersService: TeachersService
  ) {}

  ngOnInit(): void {}

  estaEditando = () => Boolean(this.idTeacher);

  onSubmit() {
    this.createTeacher();
  }

  createTeacher() {
    const formValue = this.formTeacher.value;
    this.teachersService.create(formValue).subscribe((res) => {
      alert("Professor criado com sucesso!");
      this.router.navigateByUrl("/admin-page/dashboard");
    });
  }

  onSuccessSaveTeacher() {
    this.router.navigate(["create-teacher"]);
  }

  onSuccess(response: Teacher[]) {
    this.teachers = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }
}
