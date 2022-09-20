import { Observable } from 'rxjs';
import { Teacher } from './../../features/teacher/model/teacher.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {


  baseUrl: string = `${environment.apiHost}`;

  options = {
    headers: {
      'content-type': 'application/json'
    }
  };

  teachers: Array<Teacher> = [];

  constructor(private httpClient: HttpClient) { }

  getTeachers() {
    return this.httpClient.get<Array<Teacher>>(this.baseUrl + '/teachers', this.options);
  }

  getById(id: number) {
    return this.httpClient.get<Teacher>(this.baseUrl + `/teachers/${id}`, this.options);
  }


  create(teacher: Teacher) {
    return this.httpClient.post(this.baseUrl + '/teachers', teacher, this.options);
  }

  update(id:number, teacher: Teacher): Observable<Object> {

    return this.httpClient.put(this.baseUrl + '/teachers/' + id, JSON.stringify(teacher), this.options)
  }


  remove(id: number) {
    return this.httpClient.delete(this.baseUrl + '/teachers/' + id, this.options);
  }

}
