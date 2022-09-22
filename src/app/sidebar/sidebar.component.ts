import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-tile-56', class: '' },
    { path: '/create-teacher', title: 'Cadastrar Professor', icon: 'nc-hat-3', class: '' },
    { path: '/create-student', title: 'Cadastrar Estudante', icon: 'nc-circle-10', class: '' },
    { path: '/create-class', title: 'Cadastrar Aula', icon: 'nc-hat-3', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
