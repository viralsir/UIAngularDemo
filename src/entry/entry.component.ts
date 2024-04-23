import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CourseService} from "../service/course.service";
import {Course} from "../model/course";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    ToastModule,

  ],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css'
})
export class EntryComponent {

    msg:string="";
    CourseGroup=new FormGroup({
       id:new FormControl(""),
       name:new FormControl("",[Validators.maxLength(50)]),
      duration:new FormControl(""),
      fees:new FormControl("",[Validators.min(0) ])
    })

   constructor(public courseservice:CourseService,private messageService: MessageService) {

   }

   save(){

        let courseform=this.CourseGroup.value;
        console.log(courseform);
        let course=new Course(parseInt(<string>courseform.id),<string>courseform.name,<string>courseform.duration,parseInt(<string>courseform.fees));
        this.courseservice.setCourses(course);
        this.msg="Record has been saved.";
        this.CourseGroup.reset();
        this.messageService.clear();
        this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: this.msg });

   }


}
