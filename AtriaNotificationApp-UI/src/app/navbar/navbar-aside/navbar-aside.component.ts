import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-aside',
  templateUrl: './navbar-aside.component.html',
  styleUrls: ['./navbar-aside.component.css']
})
export class NavbarAsideComponent implements OnInit {

  constructor() { }

  @Input() masked;
  @Input() isLoggedIn;
  @Output() maskedToggle = new EventEmitter<boolean>();

  ngOnInit() {
  }

  maskToggle(): void {
    this.maskedToggle.emit();
  }

}
