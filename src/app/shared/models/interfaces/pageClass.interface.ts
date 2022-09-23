export interface PageClass {
  content: Content[];
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  number: number;
  size: number;
  sort: Sort2;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Content {
  id: number;
  grade: string;
  teacher: Teacher;
  students: Student[];
}

export interface Teacher {
  id: number;
  name: string;
  phone: string;
  email: string;
  salary: number;
  street: string;
  city: string;
  country: string;
  postalCode: string;
  state: string;
}

export interface Student {
  id: number;
  name: string;
  phone: string;
  email: string;
  fees: number;
  street: string;
  city: string;
  country: string;
  postalCode: string;
  state: string;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageSize: number;
  pageNumber: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Sort2 {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
