import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Device Manager';

  constructor(
    private router: Router
  ) { }
  /* 
  export interface Customer {
      id?: number;
      name?: string;
      age?: number;
      email?:string;
  }
  */

  //data : [],
  customers = [
    {
      "ïd": 1,
      "name": "Luis",
      "age": 20,
      "email": "luis@email.com"
    },
    {
      "ïd": 2,
      "name": "Laura",
      "age": 36,
      "email": "luis@email.com",
    },
    {
      "ïd": 1,
      "name": "Luis",
      "age": 20,
      "email": "luis@email.com"
    },
    {
      "ïd": 2,
      "name": "Laura",
      "age": 36,
      "email": "luis@email.com",
    },

  ]
}
