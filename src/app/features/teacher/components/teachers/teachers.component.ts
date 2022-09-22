import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs';

import { TeachersService } from './../../../../shared/services/teachers.service';
import { Teacher } from './../../model/teacher.model';

@Component({
  selector: "app-teachers",
  templateUrl: "./teachers.component.html",
  styleUrls: ["./teachers.component.scss"],
})
export class TeachersComponent implements OnInit {
  teachers: Array<Teacher> = [];
  teacher: Teacher;
  teachersTable: any;
  pTeacher: number = 1;
  pageTeacher: number = 0;
  totalTeacher: number = 0;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private teachersService: TeachersService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.estaCarregando = false;
    this.teachersService.getTeachers().subscribe((teachers) => {
      this.teachers = teachers.content;
    });
    this.getTeachersTable();
  }

  deleteTeacher(id: number) {
    this.teachersService.remove(id).subscribe((res) => {
      alert("Teacher successfully deleted!");
      this.getTeachersTable();
    });
  }

  loadTable() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

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

  getTeachersTable() {
    this.teachersService
      .getTeachersTable(this.pageTeacher)

      .subscribe((response: any) => {
        this.teachersTable = response.content;

        this.totalTeacher = response.totalElements;
      });
  }

  pageChangeEvent(event: number) {
    this.pageTeacher = event - 1;
    this.pTeacher = event;

    this.getTeachersTable();
  }

  update(id: number) {
    this.router.navigate(["update-teacher", id]);
  }
}
