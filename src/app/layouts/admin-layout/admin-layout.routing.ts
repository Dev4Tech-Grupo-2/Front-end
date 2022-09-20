import { Routes } from '@angular/router';
import { CreateStudentComponent } from 'app/features/student/pages/create-student/create-student.component';
import { StudentComponent } from 'app/features/student/pages/student/student.component';
import { UpdateStudentsComponent } from 'app/features/student/pages/update-students/update-students.component';
import { CreateTeacherComponent } from 'app/features/teacher/pages/create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from 'app/features/teacher/pages/update-teacher/update-teacher.component';

import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { UserComponent } from '../../pages/user/user.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',            component: StudentComponent },
    { path: 'user',                 component: UserComponent },
    { path: 'create-student',       component: CreateStudentComponent },
    { path: 'update-student/:id',   component: UpdateStudentsComponent },
    { path: 'create-teacher',       component: CreateTeacherComponent },
    { path: 'update-teacher/:id',   component: UpdateTeacherComponent },
    { path: 'table',                component: TableComponent },
    { path: 'typography',           component: TypographyComponent },
    { path: 'icons',                component: IconsComponent },
    { path: 'maps',                 component: MapsComponent },
    { path: 'notifications',        component: NotificationsComponent },
    { path: 'upgrade',              component: UpgradeComponent }

];
