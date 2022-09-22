import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'app/features/student/model/student.model';
import { environment } from 'environments/environment.prod';
import { Observable } from 'rxjs';

import { ApiResponse } from '../ApiResponse';

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  baseUrl: string = `${environment.BASE_URL}`;

  students: Array<Student> = [];

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.baseUrl + "/students");
  }

  getStudentsTable(page: number) {
    return this.httpClient.get(this.baseUrl + "/students" + "?page=" + page);
  }

  getById(id: number) {
    return this.httpClient.get<Student>(this.baseUrl + `/students/${id}`);
  }

  create(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.baseUrl + "/students", student);
  }

  update(id: number, student: Student): Observable<Object> {
    return this.httpClient.put<Student>(
      this.baseUrl + "/students/" + id,
      student
    );
  }

  remove(id: number) {
    return this.httpClient.delete(this.baseUrl + "/students/" + id);
  }
}
