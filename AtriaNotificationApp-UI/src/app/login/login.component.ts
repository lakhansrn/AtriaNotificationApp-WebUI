import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  response = '';
  password: string;
   

  validate(){
    if(this.password.length < 8){
      this.response = "Password should be at least 8 characters long";
    }
    else
      this.response = '';
  }
}
