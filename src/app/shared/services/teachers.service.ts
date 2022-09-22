import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from 'app/features/teacher/model/teacher.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { ApiResponse } from '../ApiResponse';

@Injectable({
  providedIn: "root",
})
export class TeachersService {
  baseUrl: string = `${environment.apiHost}`;

  options = {
    headers: {
      "content-type": "application/json",
    },
  };

  teachers: Array<Teacher> = [];

  constructor(private httpClient: HttpClient) {}

  getTeachers(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(
      this.baseUrl + "/teachers",
      this.options
    );
  }

  getTeachersTable(page: number) {
    return this.httpClient.get(this.baseUrl + "/teachers" + "?page=" + page);
  }

  getById(id: number) {
    return this.httpClient.get<Teacher>(this.baseUrl + `/teachers/${id}`);
  }

  create(teacher: Teacher) {
    return this.httpClient.post(this.baseUrl + "/teachers", teacher);
  }

  update(id: number, teacher: Teacher): Observable<Object> {
    return this.httpClient.put(this.baseUrl + "/teachers/" + id, teacher);
  }

  remove(id: number) {
    return this.httpClient.delete(this.baseUrl + "/teachers/" + id);
  }
}
