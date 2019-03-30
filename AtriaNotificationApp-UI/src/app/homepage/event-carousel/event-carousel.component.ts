import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../../model/event.model';
import { LoaderService } from '../../_services';

@Component({
  selector: 'app-event-carousel',
  templateUrl: './event-carousel.component.html',
  styleUrls: ['./event-carousel.component.css']
})
export class EventCarouselComponent implements OnInit {

  events: Event[];
  @Output() showcontent = new EventEmitter<string>();

  constructor(private eventService: EventService,
    private loaderService: LoaderService) { }

  ngOnInit() {
    this.getEvents();
    // Mock Events
    // this.getMockEvents();
  }

  getEvents() {
    this.loaderService.setLoader();
    this.eventService.getEvents().subscribe(events => {
      this.loaderService.clearLoader();
      // sort events
      this.events = events.sort(this.sortByDate);
      // sort announcements
      this.events.map(event => {
        event.announcements.sort(this.sortByDate);
        event.announcements.map(announcement => {
          if (announcement.img.length > 0) {
            const img = announcement.img.split('upload/');
            announcement.img = img[0] + 'upload/q_auto/' + img[1];
          }
        });
      });
    });
  }

  sortByDate(a: any, b: any) {
    const aDate = a.dateModifiedOn || a.dateCreatedOn;
    const bDate = b.dateModifiedOn || b.dateCreatedOn;
    return new Date(bDate).getTime() - new Date(aDate).getTime();
  }

  getMockEvents() {
    this.eventService.getMockEvents().subscribe(events => {
      this.events = events;
      console.log(this.events);
    });
  }

  showContent(id: string) {
    this.showcontent.emit(id);
  }
}
