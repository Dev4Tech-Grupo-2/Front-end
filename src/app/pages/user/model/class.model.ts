export interface Class {
  id: number;
  grade: string;
  teacher: Teacher;
  students: any[];
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
