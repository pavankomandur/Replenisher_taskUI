import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {TableComponent} from './table/table.component'
import {DialogComponent} from './dialog/dialog.component'
import {EditdialogComponent} from './editdialog/editdialog.component'
import {TaskDeleteComponent} from './task-delete/task-delete.component'
import {RecurringComponent} from './recurring/recurring.component'
const routes: Routes = [{path:'',component: LoginComponent},
{path:'login',component: LoginComponent},
{path:'table',component: TableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
