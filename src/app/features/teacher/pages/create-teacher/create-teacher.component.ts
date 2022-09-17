import { ActivatedRoute, Router } from '@angular/router';
import { TeachersService } from './../../../../shared/services/teachers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Teacher } from './../../model/teacher.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss']
})
export class CreateTeacherComponent implements OnInit {

  teachers: Array<Teacher> = [];
  teacher?: Teacher;
  idTeacher?: number;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  formTeacher: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    postal_code: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required])

  });


  constructor(private router: Router,
    private activedRoute: ActivatedRoute,
    private teachersService: TeachersService) { }

  ngOnInit(): void {

    this.idTeacher = parseInt(this.activedRoute.snapshot.paramMap.get('id'));
    if (this.estaEditando()) {
      this.activedRoute.params.subscribe((params) => {
        const id = parseInt(params['idTeacher']);
        this.teachersService.getById(id).subscribe((teacher) => {
          this.teacher = teacher;
        });
      });
    }


  }

  estaEditando = () => Boolean(this.idTeacher);


  onSubmit() {

    if (this.estaEditando()) {
      this.update();
      return;
    }

    this.createTeacher();
  }


  createTeacher() {
    const formValue = this.formTeacher.value;
    this.teachersService.create(formValue).subscribe((res) => {
      this.router.navigateByUrl('/dashboard');
    });

  }


  update() {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['idTeacher']);
      this.teachersService.getById(id).subscribe((teacher) => {
        this.teacher = teacher;
        this.teachersService.update(this.idTeacher, this.formTeacher.value)
          .subscribe(
            response => this.onSuccessSaveTeacher(),
          );
      });
    });

  }

  onSuccessSaveTeacher() {
    this.router.navigate(['create-teacher']);
  }


  onSuccess(response: Teacher[]) {
    this.teachers = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }




}
