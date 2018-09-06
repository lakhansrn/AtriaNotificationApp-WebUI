import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-carousel',
  templateUrl: './event-carousel.component.html',
  styleUrls: ['./event-carousel.component.css']
})
export class EventCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() event;

}
