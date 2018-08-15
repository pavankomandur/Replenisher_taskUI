import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule}    from '@angular/forms';
import { EditdialogRoutingModule } from './editdialog-routing.module';
import { EditdialogComponent } from './editdialog.component';

@NgModule({
  imports: [
    CommonModule,
    EditdialogRoutingModule,
    FormsModule
  ],
  declarations: [EditdialogComponent]
})
export class EditdialogModule { }
