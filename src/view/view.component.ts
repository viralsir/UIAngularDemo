import { Component } from '@angular/core';
import {CourseService} from "../service/course.service";
import {Table, TableModule} from "primeng/table";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    TableModule,
    CurrencyPipe
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  constructor(public courseservice:CourseService)  {

  }
  clear(table: Table) {
    table.clear();
  }
}
