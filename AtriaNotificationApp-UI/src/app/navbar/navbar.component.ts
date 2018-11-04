import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private navbarService: NavbarService) { }

  masked = false;
  title = 'App Title';
  isLoggedIn = false;

  ngOnInit() {
    this.authenticationService.login$.subscribe(res => this.isLoggedIn = res);
  }

  maskedToggle() {
    this.masked = !this.masked;
  }

  logout() {
    this.authenticationService.logout();
  }

  login() {
    this.navbarService.login();
  }

}
