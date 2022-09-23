import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateClassComponent } from 'app/pages/user/update-class/update-class.component';
import { UserComponent } from 'app/pages/user/user.component';
import { NgxPaginationModule } from 'ngx-pagination';

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
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  declarations: [UserComponent, UpdateClassComponent],
  exports: [UserComponent, UpdateClassComponent],
})
export class AdminLayoutModule {}
