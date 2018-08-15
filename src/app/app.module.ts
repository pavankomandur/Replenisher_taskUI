import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule}    from '@angular/forms';
import {TableComponent} from './table/table.component';
import {TableModule} from 'primeng/table'
import {ProductService} from './product.service'
import { HttpClientModule }    from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { DialogComponent } from './dialog/dialog.component';
import {EditdialogComponent} from './editdialog/editdialog.component';
import {DialogModule} from 'primeng/dialog';
import {TaskDeleteComponent} from './task-delete/task-delete.component'
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from "primeng/primeng";
import {Footer} from "primeng/shared";
import { ConfirmDialogModule, ConfirmationService, SharedModule } from 'primeng/primeng';
import {RecurringComponent} from './recurring/recurring.component'
import {CheckboxModule} from 'primeng/checkbox';
import {PickListModule} from 'primeng/picklist';
import {ListboxModule} from 'primeng/listbox';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    DialogComponent,
    EditdialogComponent,
    TaskDeleteComponent,
    RecurringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,
    ConfirmDialogModule,
    SharedModule,
    CheckboxModule,
    PickListModule,
    ListboxModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
