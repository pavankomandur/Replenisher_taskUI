import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecurringRoutingModule } from './recurring-routing.module';
import { RecurringComponent } from './recurring.component';

@NgModule({
  imports: [
    CommonModule,
    RecurringRoutingModule
  ],
  declarations: [RecurringComponent]
})
export class RecurringModule { }
