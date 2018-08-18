import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-aside',
  templateUrl: './navbar-aside.component.html',
  styleUrls: ['./navbar-aside.component.css']
})
export class NavbarAsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {  
  }

  @Input() masked;
  @Output() maskedToggle = new EventEmitter<boolean>();

  maskToggle(): void{
    this.maskedToggle.emit();
  }

}
