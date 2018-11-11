import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event.model';
import { AnnouncementService } from './services/announcement.service';
import { Content } from '../model/content.model';
import { LoaderService, ToastService } from '../_services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  events: Event[];
  announcementID: string;
  contents: Content[];
  display: boolean;

  constructor(private announcementService: AnnouncementService,
    private toastService: ToastService,
    private loaderService: LoaderService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    // this.eventService.getEvents().subscribe(events => this.events = events);
  }

  showContent(id: string) {
    this.announcementID = id;
    this.announcementService.setAnnouncementID(id);
    this.loaderService.setLoader();
    this.announcementService.getContents(this.announcementService.getAnnouncementID()).subscribe(content => {
      this.loaderService.clearLoader();
      this.contents = content;
      if (this.contents.length === 0) {
        this.toastService.setToastMsg({key: 'alert', severity: 'warn', summary: 'Info', detail: 'No Content to display'});
      }
      this.display = true;
    });
  }

  closeContent(val: boolean) {
    this.display = val;
  }

}
