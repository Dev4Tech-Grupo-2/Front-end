import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'app/features/teacher/model/teacher.model';
import { ApiResponse } from 'app/shared/ApiResponse';
import { ClassesService } from 'app/shared/services/classes.service';
import { TeachersService } from 'app/shared/services/teachers.service';

import { Class } from '../model/class.model';

@Component({
  selector: "app-update-class",
  templateUrl: "./update-class.component.html",
  styleUrls: ["./update-class.component.scss"],
})
export class UpdateClassComponent implements OnInit {
  teachersList: Teacher[];
  teachers: Array<Teacher> = [];
  teacher?: Teacher;
  idTeacher?: number;

  classesList: Class[];
  classes: Array<Class> = [];
  class?: Class;
  idClass?: number;

  formClassUp: any = new FormGroup({
    grade: new FormControl("", [Validators.required]),
    teacherId: new FormControl(0, [Validators.required]),
  });

  constructor(
    private activedRoute: ActivatedRoute,
    private teachersService: TeachersService,
    private classesService: ClassesService,
    private teachersSerice: TeachersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idClass = this.activedRoute.snapshot.params["id"];
    console.log("ID" + this.idClass);
    this.classesService.getById(this.idClass).subscribe((resp) => {
      this.class = resp;
    });
    this.teachersSerice.getTeachers().subscribe((resp: ApiResponse) => {
      this.teachers = resp.content
    })
  }

  onSubmit() {
    this.updateClass();
  }

  updateClass() {

    this.classesService
      .update(this.idClass, this.formClassUp.value)
      .subscribe((res) => {
        alert("Aula atualizada com sucesso!");
        this.router.navigateByUrl("/admin-page/create-class");
      },
        () => alert("Não foi possível atualizar, professor ou série já estão associados a uma aula :("));
  }
}
