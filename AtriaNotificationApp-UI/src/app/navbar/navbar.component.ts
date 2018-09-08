import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  masked = false;
  title = 'App Title';
  ngOnInit() {
  }

  maskedToggle() {
    this.masked = !this.masked;
  }

}
