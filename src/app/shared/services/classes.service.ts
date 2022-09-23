import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Class } from 'app/pages/user/model/class.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { PageClass } from '../models/interfaces/pageClass.interface';

@Injectable({
  providedIn: "root",
})
export class ClassesService {
  baseUrl: string = `${environment.apiHost}`;

  options = {
    headers: {
      "content-type": "application/json",
    },
  };

  classes: Array<Class> = [];

  constructor(private httpClient: HttpClient) {}

  getClasses(): Observable<PageClass> {
    return this.httpClient.get<PageClass>(
      this.baseUrl + "/classes",
      this.options
    );
  }

  getClassesTable(page: number): Observable<PageClass> {
    return this.httpClient.get<PageClass>(
      this.baseUrl + "/classes" + "?page=" + page
    );
  }

  getById(id: number): Observable<Class> {
    return this.httpClient.get<Class>(this.baseUrl + `/classes/${id}`);
  }

  create(classesList: Class) {
    return this.httpClient.post(this.baseUrl + "/classes", classesList);
  }

  update(id: number, classesList: Class): Observable<Class> {
    return this.httpClient.put<Class>(
      this.baseUrl + "/classes/" + id,
      classesList
    );
  }

  remove(id: number) {
    return this.httpClient.delete(this.baseUrl + "/classes/" + id);
  }
}
