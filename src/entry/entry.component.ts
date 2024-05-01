import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CourseService} from "../service/course.service";
import {Course} from "../model/course";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {MessagesModule} from "primeng/messages";




@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MessagesModule,
     ReactiveFormsModule,
     InputTextModule,
     InputNumberModule,
     ButtonModule,
     ToastModule,
     MessagesModule,
  ],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css',

})
export class EntryComponent {

  messages1:any;
    msg:string="";
    CourseGroup=new FormGroup({
       _id:new FormControl(""),
       _name:new FormControl("",[Validators.maxLength(50)]),
      _duration:new FormControl(""),
      _fees:new FormControl("",[Validators.min(0) ])
    })

   constructor(public courseservice:CourseService,private messageService: MessageService) {
         console.log("consutructor is called.");
         if(this.courseservice.formdislaymode=="Edit")
         {
             //const form=this.CourseGroup.value;
             /*this.CourseGroup.get('id')?.setValue(this.courseservice.CurrentRecord.id);
             this.CourseGroup.get('name')?.setValue(this.courseservice.CurrentRecord.name);
             this.CourseGroup.get('duration')?.setValue(this.courseservice.CurrentRecord.duration);
             this.CourseGroup.get('fees')?.setValue(this.courseservice.CurrentRecord.fees);
             */
             this.CourseGroup.setValue(this.courseservice.CurrentRecord);



         }

   }

   save(){

        if(this.courseservice.formdislaymode=="New")
        {
          let courseform=this.CourseGroup.value;
          console.log(courseform);
          let course=new Course(parseInt(<string>courseform._id),<string>courseform._name,<string>courseform._duration,parseInt(<string>courseform._fees));
          this.courseservice.setCourses(course);
          this.msg="Record has been saved.";
          this.CourseGroup.reset();
          this.messageService.clear();
          this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: this.msg });

        }
        else
        {
          this.courseservice.formdislaymode="New";

        }

     /*this.messages1 = [
       { severity: 'success', summary: 'Success', detail: 'Record has been saved.' }

     ];*/

   }


}
