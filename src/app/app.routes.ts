import { Routes } from '@angular/router';
import {EntryComponent} from "../entry/entry.component";
import {ViewComponent} from "../view/view.component";

export const routes: Routes = [
  {path:"Entry",component:EntryComponent},
  {path:"View",component:ViewComponent},
];
