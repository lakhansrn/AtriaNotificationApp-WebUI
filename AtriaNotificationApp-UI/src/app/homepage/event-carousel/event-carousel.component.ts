import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../../model/event.model';

@Component({
  selector: 'app-event-carousel',
  templateUrl: './event-carousel.component.html',
  styleUrls: ['./event-carousel.component.css']
})
export class EventCarouselComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      console.log(this.events);
    });
  }
}
