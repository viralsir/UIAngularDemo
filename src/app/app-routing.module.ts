import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntryComponent} from "../entry/entry.component";
import {ViewComponent} from "../view/view.component";

const routes: Routes = [
  {path:"Entry",component:EntryComponent},
  {path:"View",component:ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
