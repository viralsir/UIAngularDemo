import { Injectable } from '@angular/core';
import {Course} from "../model/course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: Course[]=new Array<Course>();
  constructor() { }

  setCourses(course: Course) {
    this.courses.push(course);
  }

  getCourses() {
    return this.courses;
  }


}
