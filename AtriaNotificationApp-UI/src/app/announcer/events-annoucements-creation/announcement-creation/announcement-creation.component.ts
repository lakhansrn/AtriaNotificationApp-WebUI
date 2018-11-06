import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Announcement } from '../../../models/announcement.model';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-announcement-creation',
  templateUrl: './announcement-creation.component.html',
  styleUrls: ['./announcement-creation.component.css']
})
export class AnnouncementCreationComponent implements OnInit {


  announcements: Announcement =
    {
      title: '',
      image: '',
      description: '',
      posted: ''
    }
    ;
  announcementImageSelection: boolean;
  announcementValidationMessage: string;
  eventSubmitted = false;
  descriptionSubmitted = false;
   @Output() backevent = new EventEmitter<boolean >();
  constructor() { }

  ngOnInit() {
  }
  back() {
    // this.backevent.emit()

  }
  announcementSubmit() {

  }

}


