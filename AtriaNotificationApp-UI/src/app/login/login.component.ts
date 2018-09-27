import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, NgForm } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  response = '';
  userdata = {
    password: '',
    username: '',
  };

  ngOnInit() {
  }
  get diagnostic() { return JSON.stringify(this.userdata); }
}


