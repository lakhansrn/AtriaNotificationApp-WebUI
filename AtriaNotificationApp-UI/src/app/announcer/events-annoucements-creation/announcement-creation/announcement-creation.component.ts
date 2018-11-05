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
  eventSubmitted: boolean = false;
  descriptionSubmitted: boolean = false;
   @Output() backevent = new EventEmitter<boolean >();
  constructor() { }

  ngOnInit() {
  }
  back() {
    this.backevent.emit()

  }
  announcementSubmit() {

    // if (this.announcements[this.announcment_index].title.length <= 0 && this.announcements[this.announcment_index].image.length <= 0 && this.announcements[this.announcment_index].description.length <= 0) {
    //   //this.announcementValidationMessage='fillout all details';
    //   //console.log(this.announcementValidationMessage);

    // }

    if (this.announcements.title.length <= 0 && this.announcements.image.length <= 0 && this.announcements.description.length <= 0) {
      this.announcementValidationMessage = 'fillout all details';
      //console.log(this.announcementValidationMessage);

    }
    else if (this.announcements.title.length <= 0) {
      this.announcementValidationMessage = 'fillout  title';
      //console.log(this.announcementValidationMessage);

    }
    else if (this.announcementImageSelection=== true) {
      if (this.announcements.image.length <= 0) {
        this.announcementValidationMessage = 'banner not selected';
        //console.log(this.announcementValidationMessage);

      }
    }
    else if (this.announcements.description.length <= 0) {
      this.announcementValidationMessage = 'fillout description';
      //console.log(this.announcementValidationMessage);

    }
    else if (this.announcements.posted.length <= 0) {
      this.announcementValidationMessage = 'post';
    }
    else {
      this.announcementValidationMessage = '';
      this.eventSubmitted = true;
    }

  }

}


