import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogRoutingModule } from './dialog-routing.module';
import { DialogComponent } from './dialog.component';

@NgModule({
  imports: [
    CommonModule,
    DialogRoutingModule
  ],
  declarations: [DialogComponent]
})
export class TaskDialogModule { }
