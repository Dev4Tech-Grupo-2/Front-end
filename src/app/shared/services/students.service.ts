import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'app/features/student/model/student.model';
import { environment } from 'environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  baseUrl: string = `${environment.BASE_URL}`;

  students: Array<Student> = [];

  constructor(private httpClient: HttpClient) { }

  getStudents() {
    return this.httpClient.get<Array<Student>>(
      this.baseUrl + "/students"
    );
  }

  getById(id: number) {
    return this.httpClient.get<Student>(
      this.baseUrl + `/students/${id}`,
    );
  }

  // create(student: Student) {
  //   return this.httpClient.post(this.baseUrl + '/students', student, this.options);
  // }

  create(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(
      this.baseUrl + "/students", student);
  }

  update(id: number, student: Student): Observable<Object> {
    return this.httpClient.put<Student>(
      this.baseUrl + "/students/" + id,
      JSON.stringify(student),
    );
  }

  remove(id: number) {
    return this.httpClient.delete(
      this.baseUrl + "/students/" + id,
    );
  }
}
