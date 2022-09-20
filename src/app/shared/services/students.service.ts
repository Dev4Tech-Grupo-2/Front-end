import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Student } from 'app/features/student/model/student.model';



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

  update(id: number, student: Student):Observable<Object> {
    return this.httpClient.put<Student>(this.baseUrl + '/students/' + id, JSON.stringify(student), this.options);
  }

  remove(id: number) {
    return this.httpClient.delete(this.baseUrl + '/students/' + id, this.options);
  }

}
