import { StudentsService } from '../../../../shared/services/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/features/student/model/student.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-students',
  templateUrl: './update-students.component.html',
  styleUrls: ['./update-students.component.scss']
})
export class UpdateStudentsComponent implements OnInit {

  students: Array<Student> = [];
  student?: Student;
  id?:number;

  formStudentUp: any = new FormGroup({
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
  private activedRoute:ActivatedRoute,
    private studentsService: StudentsService) { }


  ngOnInit() {
    this.id = this.activedRoute.snapshot.params['id'];
    this.studentsService.getById(this.id).subscribe(student => {
      this.student = student;
    });
  }


  onSubmit() {
    this.studentsService.update(this.id, this.formStudentUp.value).subscribe(res => {
      alert('Student updated successfully!');
      this.router.navigateByUrl('/dasboard');
    });
  }

  cancelar(){
    this.router.navigateByUrl('/dashboard');
  }


}
