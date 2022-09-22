import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'app/shared/services/students.service';
import { finalize, take } from 'rxjs';

import { Student } from '../../model/student.model';

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {
  students: Array<Student> = [];
  student: Student;
  studentsTable: any;
  p: number = 1;
  page: number = 0;
  total: number = 0;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private studentsService: StudentsService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.estaCarregando = false;
    this.studentsService.getStudents().subscribe((students) => {
      this.students = students.content;
    });
    this.getStudentsTable();
  }

  deleteStudent(idStudent: number) {
    this.studentsService.remove(idStudent).subscribe((res) => {
      alert("Student successfully deleted!");
      // this.loadTable();
      this.getStudentsTable();
    });
  }

  loadTable() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.studentsService
      .getStudents()
      .pipe(
        take(1),
        finalize(() => (this.estaCarregando = false))
      )
      .subscribe(
        (response) => this.onSuccess(response.content),
        (error) => this.onError(error)
      );
  }

  onSuccess(response: Student[]) {
    this.students = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  getStudentsTable() {
    this.studentsService
      .getStudentsTable(this.page)

      .subscribe((response: any) => {
        this.studentsTable = response.content;

        this.total = response.totalElements;
      });
  }

  pageChangeEvent(event: number) {
    this.page = event - 1;
    this.p = event;

    this.getStudentsTable();
  }

  update(id: number) {
    this.router.navigate(["update-student", id]);
  }
}
