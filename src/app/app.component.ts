import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UIAngularDemo';
  items: MenuItem[] | undefined;

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
