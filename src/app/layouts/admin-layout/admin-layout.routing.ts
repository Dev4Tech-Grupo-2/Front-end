import { StudentComponent } from './../../features/student/pages/student/student.component';
import { Routes } from '@angular/router';
import { CreateStudentComponent } from 'src/app/features/student/pages/create-student/create-student.component';

import { IconsComponent } from '../../pages/icons/icons.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { UserComponent } from '../../pages/user/user.component';
import { CreateTeacherComponent } from 'src/app/features/teacher/pages/create-teacher/create-teacher.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: StudentComponent},
    { path: 'user',           component: UserComponent },
    { path: 'create-student', component: CreateStudentComponent },
    { path: 'create-teacher', component: CreateTeacherComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
