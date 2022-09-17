
import { StudentsComponent } from './../../features/student/components/students/students.component';
import { Routes } from '@angular/router';

import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { CreateStudentComponent } from 'src/app/features/student/pages/create-student/create-student.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: StudentsComponent },
    { path: 'user',           component: UserComponent },
    { path: 'create-student', component: CreateStudentComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
