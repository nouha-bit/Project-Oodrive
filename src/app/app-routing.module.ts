import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './component/items/list/list.component';
import { EditComponent } from './component/items/edit/edit.component';
import { AddComponent } from './component/items/add/add.component';


const routes: Routes = [
  { path: "items", component: ListComponent },
  { path: "items/edit/:id", component: EditComponent},
  { path: "items/add", component: AddComponent },
  { path: "", component: ListComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
