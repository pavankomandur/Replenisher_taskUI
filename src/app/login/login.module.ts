import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputTextModule,
    FormsModule
    
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
