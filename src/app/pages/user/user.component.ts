import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from 'app/features/teacher/model/teacher.model';
import { TeachersService } from 'app/shared/services/teachers.service';
import { finalize, take } from 'rxjs';

import { Class } from './model/class.model';

@Component({
  //   selector: "user-cmp",
  //   moduleId: module.id,
  //   templateUrl: "user.component.html",

  selector: "app-user",
  templateUrl: "./user.component.html",
  //   styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  teachersList: Teacher[];
  teachers: Array<Teacher> = [];
  teacher?: Teacher;
  idTeacher?: number;

  classesList: Class[];
  classes: Array<Class> = [];
  class?: Class;
  idClass?: number;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  // formClass: any = new FormGroup({
  //   grade: new FormControl("", [Validators.required]),
  // });

  formClass: FormGroup = {} as FormGroup;

  constructor(
    private teachersService: TeachersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.estaCarregando = false;
    this.teachersService.getTeachers().subscribe((teachers) => {
      this.teachers = teachers.content;
    });
  }

  loadTable() {
    this.teachersService
      .getTeachers()
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe(
        (response) => this.onSuccess(response.content),
        (error) => this.onError(error)
      );
  }

  onSuccess(response: Teacher[]) {
    this.teachers = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  onSubmit() {
    this.createClass();
  }

  createClass() {
    const formValue = this.formClass.value;
    this.teachersService.create(formValue).subscribe((res) => {
      alert("Professor criado com sucesso!");
      //   this.router.navigateByUrl("/admin-page/dashboard");
    });
  }
}
