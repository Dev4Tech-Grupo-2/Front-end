import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from 'app/features/teacher/model/teacher.model';
import { ApiResponse } from 'app/shared/ApiResponse';
import { ClassesService } from 'app/shared/services/classes.service';
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

  classesTable: any;
  p: number = 1;
  page: number = 0;
  total: number = 0;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  formClass: any = new FormGroup({
    grade: new FormControl("", [Validators.required]),
    teacherId: new FormControl(0, [Validators.required]),
  });

  // formClass: FormGroup = {} as FormGroup;

  constructor(
    private teachersService: TeachersService,
    private classesService: ClassesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.estaCarregando = false;
    this.teachersService.getTeachers().subscribe((teachers) => {
      this.teachers = teachers.content;
    });
    this.getClassesTable();
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
    this.getClassesTable();
  }

  createClass() {
    const formValue = this.formClass.value;
    this.classesService.create(formValue).subscribe((res) => {
      alert("Aula criada com sucesso!");
      //   this.router.navigateByUrl("/admin-page/dashboard");
      this.getClassesTable();
    });
  }

  getClassesTable() {
    this.classesService
      .getClassesTable(this.page)

      .subscribe((response: ApiResponse) => {
        this.classesTable = response.content;

        this.total = response.totalElements;
      });
  }

  pageChangeEvent(event: number) {
    this.page = event - 1;
    this.p = event;

    this.getClassesTable();
  }
}
