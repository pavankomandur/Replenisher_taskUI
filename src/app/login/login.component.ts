import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  roles: SelectItem[];
  role: string = 'BUSINESS';

  private router: Router;
    username: string;
    password: string;

    constructor(r: Router) {
      this.router = r;
      this.roles = [
        {label:'Business', value:'BUSINESS'},
        {label:'Induvidual', value:'INDUVIDUAL'}

    ];

    }

    login() {
      console.log(this.username +","+ this.password)
      this.router.navigate(['/table'],
      {queryParams: {role: this.role, userName: this.username}});
    }

  }


