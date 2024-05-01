import { Component } from '@angular/core';
import {CourseService} from "../service/course.service";
import {Table, TableModule} from "primeng/table";
import {CurrencyPipe} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    TableModule,
    CurrencyPipe,
    ButtonModule
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  constructor(public courseservice:CourseService,private messageService: MessageService,public router:Router)  {

  }
  clear(table: Table) {
    table.clear();
  }

  delete(id:any){
    const index = this.courseservice.getCourses().findIndex(obj => obj.id === id)
    if (index > -1) {
      this.courseservice.getCourses().splice(index, 1);
    }
    this.messageService.clear();
    this.messageService.add({ key: 'toast1', severity: 'error', summary: 'Deleted', detail: "Record has been deleted." });
  }

  updaterecord(course: any) {
   this.courseservice.CurrentRecord=course;
   this.courseservice.formdislaymode="Edit";
   this.router.navigate(['Entry']);


  }
}
