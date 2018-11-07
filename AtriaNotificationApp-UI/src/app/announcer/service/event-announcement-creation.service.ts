import { Injectable } from '@angular/core';
import { Announcement } from '../../model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventAnnouncementCreationService {

  announcements = new Subject<Announcement[]>();
  eventID = new Subject<string>();

  constructor() { }

  setAnnouncements(announcements: Announcement[]) {
    this.announcements.next(announcements);
  }

  setEventID(id: string) {
    this.eventID.next(id);
  }

}
