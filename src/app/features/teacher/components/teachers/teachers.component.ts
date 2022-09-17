import { TeachersService } from './../../../../shared/services/teachers.service';
import { take, finalize } from 'rxjs';
import { Teacher } from './../../model/teacher.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachers: Array<Teacher> = [];
  teacher: Teacher;


  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(private teachersService: TeachersService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.estaCarregando = false;
    this.teachersService.getTeachers().subscribe((teachers) => { this.teachers = teachers });

  }

  deleteTeacher(id: number) {

    this.teachersService.remove(id).subscribe((res) => {

      alert('Teacher successfully deleted!');
      this.loadTable();
    });
  }

  loadTable() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.teachersService.getTeachers()
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error),
      );
  }

  onSuccess(response: Teacher[]) {
    this.teachers = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  update() {
    this.router.navigateByUrl('/create-teacher');

  }

}
