import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '../../model/event.model';
import { EventService } from '../services/event.service';
import { Announcement } from '../../model/announcement.model';
import { Content } from '../../model/content.model';
import { EventAnnouncementID } from '../models/event-announcement-id.model';

@Component({
  selector: 'app-content-creation',
  templateUrl: './content-creation.component.html',
  styleUrls: ['./content-creation.component.css'],
})
export class ContentCreationComponent implements OnInit {

  all_events: Event[];
  event: Event;
  event_suggestions: Event[];
  show_event_box = true;

  all_announcement: Announcement[];
  announcement: Announcement;
  announcement_suggestions: Announcement[];

  all_content: Content[];
  content: Content;
  content_suggestions: Content[];

  // holds event and announcement ids
  event_announcement_id: EventAnnouncementID = {
    event_id: '',
    announcement_id: '',
    content_id: ''
  };

  showContentPanel = false;
  editable = false;

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
    this.announcement = null;
    this.all_announcement = this.event.announcements;
    this.event_announcement_id.event_id = this.event.id;
    this.announcement_suggestions = this.all_announcement;
  }

  searchAnnouncement(e) {
    if (e.query === '') {
      this.announcement_suggestions = this.all_announcement;
    }

    this.announcement_suggestions = this.filterTitle(this.all_announcement, e.query);
  }

  chooseAnnouncement() {
    this.event_announcement_id.announcement_id = this.announcement.id;
    this.content = null;
    this.editContent();
  }

  addContent() {
    this.showContentPanel = true;
    this.editable = false;
    this.content = null;
  }

  editContent() {
    this.eventService.getContents(this.event_announcement_id.announcement_id)
    .subscribe(res => {
      this.all_content = res;
      this.content_suggestions = this.all_content;
    });
  }

  searchContent(e) {
    if (e.query === '') {
      this.content_suggestions = this.all_content;
    }

    this.content_suggestions = this.filterTitle(this.all_content, e.query);
  }

  chooseContent() {
    this.event_announcement_id.content_id = this.content.id;
    this.editable = true;
    this.showContentPanel = true;
  }

  filterTitle(arr, title) {
    return arr.filter(val => val.title.toLowerCase().indexOf(title.toLowerCase()) > -1);
  }

}
