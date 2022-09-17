import { Student } from './../../model/student.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StudentsService } from './../../../../shared/services/students.service';

@Component({
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  students: Array<Student> = [];
  student?: Student;
  idStudent?: number;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  formStudent: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    fees: new FormControl(0, [Validators.required, Validators.min(50)]),
    email: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    postal_code: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required])

  });


  constructor(private router: Router,
    private activedRoute: ActivatedRoute,
    private studentsService: StudentsService) { }

  ngOnInit(): void {

    this.idStudent = parseInt(this.activedRoute.snapshot.paramMap.get('id'));
    if (this.estaEditando()) {
      this.activedRoute.params.subscribe((params) => {
        const id = parseInt(params['idStudent']);
        this.studentsService.getById(id).subscribe((student) => {
          this.student = student;
        });
      });
    }


  }


  // onSubmit() {
  //   const formValue = this.formStudent.value;
  //   this.studentsService.create(formValue).subscribe((res) => {
  //     this.router.navigateByUrl('/dashboard');
  //   });
  // }

  estaEditando = () => Boolean(this.idStudent);


  onSubmit() {

    if (this.estaEditando()) {
      this.updateStudent();
      return;
    }

    this.createStudent();
  }


  createStudent() {
    const formValue = this.formStudent.value;
    this.studentsService.create(formValue).subscribe((res) => {
      this.router.navigateByUrl('/dashboard');
    });

  }


  updateStudent() {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['idStudent']);
      this.studentsService.getById(id).subscribe((student) => {
        this.student = student;
        this.studentsService.update(this.idStudent, this.formStudent.value)
          .subscribe(
            response => this.onSuccessSaveStudent(),
          );
      });
    });

  }

  onSuccessSaveStudent() {
    this.router.navigate(['create-student']);
  }


  onSuccess(response: Student[]) {
    this.students = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }


}
