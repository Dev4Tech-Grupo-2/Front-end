import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/features/student/model/student.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl: string = `${environment.apiHost}`;

  options = {
    headers: {
      'content-type': 'application/json'
    }
  };

  students: Array<Student> = [];

  constructor(private httpClient: HttpClient) { }

  getStudents() {
    return this.httpClient.get<Array<Student>>(this.baseUrl + '/students', this.options);
  }

  getById(id: number) {
    return this.httpClient.get<Student>(this.baseUrl + `/students/${id}`, this.options);
  }


  create(student: Student) {
    return this.httpClient.post(this.baseUrl + '/students', student, this.options);
  }

  update(id: number, student: Student) {
    return this.httpClient.put<Student>(this.baseUrl + '/students/' + id, student, this.options);
  }



  remove(id: number) {
    return this.httpClient.delete(this.baseUrl + '/students/' + id, this.options);
  }

}
