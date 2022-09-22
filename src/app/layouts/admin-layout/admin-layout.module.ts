import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TeacherModule } from './../../features/teacher/teacher.module';
import { AdminLayoutRoutingModule } from './admin-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule,
    TeacherModule,
    AdminLayoutRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [],
  exports: []
})

export class AdminLayoutModule { }
