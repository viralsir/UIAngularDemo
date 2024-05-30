import { Injectable } from '@angular/core';
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  messages1:any;
  formdislaymode:string="New";
  CurrentRecord:any;



  public courses: Course[]=new Array<Course>();
  constructor(public http:HttpClient) {

  }

  setCourses(course: Course) {
    this.courses.push(course);
  }

  getCourses() {
    return this.courses;
  }

  setDBCourse(course: Course):Observable<Course> {
     return this.http.post<Course>("http://localhost:3000/course",JSON.parse(JSON.stringify(course)));
  }



}
