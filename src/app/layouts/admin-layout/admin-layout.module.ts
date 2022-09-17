
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IconsComponent } from '../../pages/icons/icons.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { UserComponent } from '../../pages/user/user.component';
import { StudentModule } from './../../features/student/student.module';
import { AdminLayoutRoutes } from './admin-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    StudentModule
  ],
  declarations: [
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,

  ]
})

export class AdminLayoutModule {}
