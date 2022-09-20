import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TeachersService } from './../../../../shared/services/teachers.service';
import { Teacher } from './../../model/teacher.model';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.scss']
})
export class UpdateTeacherComponent implements OnInit {

  teachers: Array<Teacher> = [];
  teacher?: Teacher;
  id?: number;

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  formTeacherUp: any = new FormGroup({
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


  ngOnInit() {
    this.id = this.activedRoute.snapshot.params['id'];
    this.teachersService.getById(this.id).subscribe(teacher => {
      this.teacher = teacher;
    });
  }


  onSubmit() {
    this.teachersService.update(this.id, this.formTeacherUp.value).subscribe(res => {
      alert('Teacher updated successfully!');
      this.router.navigateByUrl('/dasboard');
    });
  }

  cancelar(){
    this.router.navigateByUrl('/dashboard');
  }


}
