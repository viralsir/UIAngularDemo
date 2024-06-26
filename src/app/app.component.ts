import { Component } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";

import {CourseService} from "../service/course.service";




@Component({
  selector: 'app-root',
  //standalone: true,
 // imports: [RouterOutlet, ButtonModule, MenubarModule, MessagesModule, ToastModule],
  //providers:[MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'UIAngularDemo';
  items: MenuItem[] | undefined;

  constructor(public course:CourseService) {
  }

  ngOnInit() {


    this.items = [
      {
        label: 'Course',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink:"Entry"

          },
          {
            label: 'View',
            icon: 'pi pi-fw pi-eye',
            routerLink:"View"
          },

        ]
      },

    ];
  }
}
