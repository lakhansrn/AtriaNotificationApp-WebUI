import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login.model';
import { Router } from '@angular/router';
import { loginData } from './mock-login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) { }
    response = '';
    userdata: Login = {
        password: '',
        username: '',
    };

    ngOnInit() {
    }

    validate() {
        console.log(123);
        const islogged = loginData.some(val => {
            if (val.username === this.userdata.username && val.password === this.userdata.password) {
                return true;
            }
        });
        if (islogged === true) {
            this.response = 'succesfully loggedin';
            this.router.navigate(['home']);
        } else {
            this.response = 'incorrect username or password';
        }
    }
    get diagnostic() { return JSON.stringify(this.userdata); }
}


