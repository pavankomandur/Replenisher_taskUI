import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskDeleteRoutingModule } from './task-delete-routing.module';
import { TaskDeleteComponent } from './task-delete.component';

@NgModule({
  imports: [
    CommonModule,
    TaskDeleteRoutingModule
  ],
  declarations: [TaskDeleteComponent]
})
export class TaskDeleteModule { }
