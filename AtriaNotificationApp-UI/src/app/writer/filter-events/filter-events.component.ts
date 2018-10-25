import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '../../model/event.model';
import { EventService } from '../services/event.service';
import { Announcement } from '../../model/announcement.model';
import { EventAnnouncementID } from '../models/event-announcement-id.model';

@Component({
  selector: 'app-filter-events',
  templateUrl: './filter-events.component.html',
  styleUrls: ['./filter-events.component.css']
})
export class FilterEventsComponent implements OnInit {

  all_events: Event[];
  event: Event;
  event_suggestions: Event[];
  show_event_box = true;

  all_announcement: Announcement[];
  announcement: Announcement;
  announcement_suggestions: Announcement[];

  // holds event and announcement ids
  event_announcement_id: EventAnnouncementID = {
    event_id: '',
    announcement_id: ''
  };

  showContentPanel = false;

  @Output() open_content_panel = new EventEmitter<Object>();

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe((events) => {
      this.all_events = events;
      // console.log(this.all_events);
      this.event_suggestions = this.all_events;
    });
  }

  searchEvent(e) {
    if (e.query === '') {
      this.event_suggestions = this.all_events;
    }

    this.event_suggestions = this.all_events
      .filter(val => val.event_name.toLowerCase().indexOf(e.query.toLowerCase()) > -1);

  }

  chooseEvent() {
    this.show_event_box = false;
    this.all_announcement = this.event.announcements;
    this.event_announcement_id.event_id = this.event.id;
    this.announcement_suggestions = this.all_announcement;
  }

  searchAnnouncement(e) {
    if (e.query === '') {
      this.announcement_suggestions = this.all_announcement;
    }

    this.announcement_suggestions = this.all_announcement
      .filter(val => val.title.toLowerCase().indexOf(e.query.toLowerCase()) > -1);
  }

  chooseAnnouncement() {
    this.event_announcement_id.announcement_id = this.announcement.id;
    this.showContentPanel = !this.showContentPanel;
  }

}
