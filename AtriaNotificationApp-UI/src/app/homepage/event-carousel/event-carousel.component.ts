import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../../model/event.model';

@Component({
  selector: 'app-event-carousel',
  templateUrl: './event-carousel.component.html',
  styleUrls: ['./event-carousel.component.css']
})
export class EventCarouselComponent implements OnInit {

  events: Event[];
  @Output() showcontent = new EventEmitter<Event>();

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
    // Mock Events
    // this.getMockEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      console.log(this.events);
    });
  }

  getMockEvents() {
    this.eventService.getMockEvents().subscribe(events => {
      this.events = events;
      console.log(this.events);
    });
  }

  showContent(event: Event) {
    this.showcontent.emit(event);
  }
}
