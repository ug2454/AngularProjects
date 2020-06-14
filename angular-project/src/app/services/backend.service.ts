import { Injectable } from '@angular/core';
import {STUDENTS} from './mock.data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  students = STUDENTS["0"]["data"];

  constructor() { }
  getData(){
    return this.students;
  }
}
