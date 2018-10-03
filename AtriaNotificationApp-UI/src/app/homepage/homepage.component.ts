import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event.model';
import { EventService } from './services/event.service';
import { Content } from '../model/content.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  events: Event[];
  contentData: Content[];
  display: boolean;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    // this.eventService.getEvents().subscribe(events => this.events = events);
  }

  showContent(content: Content[]) {
    this.contentData = content;
    this.display = !this.display;
  }

  closeContent(display) {
    this.display = !this.display;
  }

}
