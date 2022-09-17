import { Student } from '../../model/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { StudentsService } from './../../../../shared/services/students.service';
import { finalize, take } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Array<Student> = [];
  student: Student;


  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(private studentsService: StudentsService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.estaCarregando = false;
    this.studentsService.getStudents().subscribe((students) => { this.students = students });

  }

  deleteStudent(idStudent: number) {

    this.studentsService.remove(idStudent).subscribe((res) => {

      alert('Student successfully deleted!');
      this.loadTable();
    });
  }

  loadTable() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.studentsService.getStudents()
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error),
      );
  }

  onSuccess(response: Student[]) {
    this.students = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  update() {
    this.router.navigateByUrl('/create-student');

  }

}


