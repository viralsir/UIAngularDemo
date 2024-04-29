import { Component } from '@angular/core';
import {CourseService} from "../service/course.service";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    TableModule
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  constructor(public courseservice:CourseService)  {

  }
}
