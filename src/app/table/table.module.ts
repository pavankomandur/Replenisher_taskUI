import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table'
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,
    TableModule
  ],
  declarations: [TableComponent]
})
export class TaskTableModule { }
