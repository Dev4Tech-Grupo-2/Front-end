import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from 'app/features/teacher/model/teacher.model';
import { PageClass, Student } from 'app/shared/models/interfaces/pageClass.interface';
import { ClassesService } from 'app/shared/services/classes.service';
import { StudentsService } from 'app/shared/services/students.service';
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
export class UserComponent implements OnInit, OnChanges {
  teachersList: Teacher[];
  teachers: Array<Teacher> = [];
  teacher?: Teacher;
  idTeacher?: number;

  classesList: Class[];
  classes: Array<Class> = [];
  class?: Class;
  idClass?: number;

  students: Array<Student> = [];
  student: Student;
  studentsTable: any;

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

  formClassStudent: any = new FormGroup({
    classId: new FormControl(0, [Validators.required]),
    studentId: new FormControl(0, [Validators.required]),
  });

  // formClass: FormGroup = {} as FormGroup;

  constructor(
    private teachersService: TeachersService,
    private classesService: ClassesService,
    private studentsService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.estaCarregando = false;
    this.teachersService.getTeachers().subscribe((teachers) => {
      this.teachers = teachers.content;
    });
    this.getClassesTable();
    this.loadTableStudents();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getClassesTable();
  }

  // Teacher

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

  // Class

  onSubmit() {
    this.createClass();
  }

  createClass() {
    const formValue = this.formClass.value;
    this.classesService.create(formValue).subscribe((res) => {
      alert("Aula criada com sucesso!");
      this.getClassesTable();
    });
  }

  getClassesTable() {
    this.classesService
      .getClassesTable(this.page)

      .subscribe((response: PageClass) => {
        this.classesTable = response.content;

        this.total = response.totalElements;
      });
  }

  pageChangeEvent(event: number) {
    this.page = event - 1;
    this.p = event;

    this.getClassesTable();
  }

  update(id: number) {
    this.router.navigate(["/admin-page/update-class", id]);
  }

  deleteClass(idClass: number) {
    this.classesService.remove(idClass).subscribe((res) => {
      alert("Aula removida com sucesso!");
      // this.loadTable();
      this.getClassesTable();
    });
  }

  // Student

  loadTableStudents() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.studentsService
      .getStudents()
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe(
        (response) => this.onSuccessStudent(response.content),
        (error) => this.onError(error)
      );
  }

  onSuccessStudent(response: Student[]) {
    this.students = response;
  }

  onErrorStudent(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  // ClassStudent

  createClassStudent(idClass: number) {
    const formValue = this.formClass.value;
    const studentId = { id: formValue.id };
    this.classesService
      .createClassStudent(+idClass, studentId)
      .subscribe((res) => {
        alert("Estudante cadastrado na aula com sucesso!");
        this.getClassesTable();
      });
  }

  getClassesStudentsTable() {
    this.classesService
      .getClassesStudentsTable(this.page)

      .subscribe((response: PageClass) => {
        this.classesTable = response.content;

        this.total = response.totalElements;
      });
  }
}
