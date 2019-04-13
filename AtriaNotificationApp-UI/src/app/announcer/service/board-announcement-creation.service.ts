import { Injectable } from '@angular/core';
import { Announcement } from '../../model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardAnnouncementCreationService {

  announcements = new Subject<Announcement[]>();
  boardID = new Subject<string>();

  constructor() { }

  setAnnouncements(announcements: Announcement[]) {
    this.announcements.next(announcements);
  }

  setBoardID(id: string) {
    this.boardID.next(id);
  }

}
