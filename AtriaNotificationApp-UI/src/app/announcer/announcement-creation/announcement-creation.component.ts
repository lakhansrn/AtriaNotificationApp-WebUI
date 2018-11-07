import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Announcement } from '../../model/announcement.model';
import { EventService, ImageUploadService } from '../../_services';
import { EventAnnouncementCreationService } from '../service/event-announcement-creation.service';

@Component({
  selector: 'app-announcement-creation',
  templateUrl: './announcement-creation.component.html',
  styleUrls: ['./announcement-creation.component.css']
})
export class AnnouncementCreationComponent implements OnInit {

  edit: boolean;
  announcement_panel = false;
  imgFile = null;
  eventid: string;
  @Output() updatedAnnouncements = new EventEmitter<string>();

  all_announcement: Announcement[];
  announcement: Announcement;
  announcement_suggestions: Announcement[];

  announcementData: Announcement = {
    id: '00000000-0000-0000-0000-000000000000',
    title: '',
    img: '',
    description: '',
    posted: ''
  };

  constructor(
    private eventService: EventService,
    private imageUploadService: ImageUploadService,
    private eventAnnouncementService: EventAnnouncementCreationService
  ) { }

  ngOnInit() {
    this.eventAnnouncementService.announcements.subscribe(res => {
      this.all_announcement = res;
      this.announcement = null;
      this.edit = false;
      this.announcement_panel = false;
      this.announcement_suggestions = res;
    });
    this.eventAnnouncementService.eventID.subscribe(res => {
      this.eventid = res;
    });
  }

  announcementSubmit() {
    const upload = (uploadContent) => {
      this.imageUploadService.uploadImage(this.imgFile)
        .subscribe(res => {
          if (res['secure_url']) {
            this.announcementData.img = res['secure_url'];
            uploadContent();
          } else {
            alert('There was an error while uploading image');
          }
        });
    };
    if (this.edit) {
      if (this.imgFile) {
        upload(this.updateAnnouncement.bind(this));
      } else {
        this.updateAnnouncement();
      }
    } else {
      if (this.imgFile) {
        upload(this.uploadAnnouncement.bind(this));
      } else {
        this.uploadAnnouncement();
      }
    }
  }

  searchAnnouncement(e) {
    if (e.query === '') {
      this.announcement_suggestions = this.all_announcement;
    }

    this.announcement_suggestions = this.all_announcement
      .filter(val => val.title.toLowerCase().indexOf(e.query.toLowerCase()) > -1);
  }

  chooseAnnouncement() {
    this.edit = true;
    Object.assign(this.announcementData, this.announcement);
  }

  addAnnouncement() {
    this.clearInput();
    this.announcement = null;
    this.edit = false;
    this.announcement_panel = true;
  }

  editAnnouncement() {
    this.edit = true;
    Object.assign(this.announcementData, this.announcement);
    this.announcement_panel = true;
  }

  closeAnnouncementPanel() {
    this.announcement_panel = false;
    this.clearInput();
  }

  setImage(e) {
    this.imgFile = e.target.files[0];
  }

  updateAnnouncement() {
    this.eventService.updateAnnouncement(this.eventid, this.announcementData)
    .subscribe(res => {
      this.updatedAnnouncements.emit(this.eventid);
      alert('Announcement updated');
    });
  }

  uploadAnnouncement() {
    this.eventService.postAnnouncement(this.eventid, this.announcementData)
    .subscribe(res => {
      this.updatedAnnouncements.emit(this.eventid);
      alert('Announcement Uploaded');
    });
  }

  clearInput() {
    this.announcementData.title = '';
    this.announcementData.description = '';
    this.announcementData.posted = '';
    this.announcementData.id = '00000000-0000-0000-0000-000000000000';
    this.announcementData.img = '';
    this.imgFile = null;
  }

}


