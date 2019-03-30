import { Component, OnInit } from '@angular/core';
import { Event, Announcement } from '../../model';
import { EventService, ImageUploadService, LoaderService, ToastService } from '../../_services';
import { EventAnnouncementCreationService } from '../service/event-announcement-creation.service';

@Component({
  selector: 'app-events-annoucements-creation',
  templateUrl: './events-annoucements-creation.component.html',
  styleUrls: ['./events-annoucements-creation.component.css']
})
export class EventsAnnoucementsCreationComponent implements OnInit {

  edit: boolean;
  event_panel = false;
  imgFile = null;

  all_events: Event[];
  event: Event;
  eventData: Event = {
    event_banner: '',
    event_name: '',
    announcements: [],
    description: '',
    showAsBanner: false,
    id: '00000000-0000-0000-0000-000000000000'
  };
  event_suggestions: Event[];

  all_announcement: Announcement[];


  constructor(
    private eventService: EventService,
    private imageUploadService: ImageUploadService,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private eventAnnouncementService: EventAnnouncementCreationService
    ) { }

  ngOnInit() {
    this.getEvents();
  }

  eventSubmit() {
    this.loaderService.setLoader();
    const upload = (uploadContent) => {
      let img_path = null;
      this.imageUploadService.uploadImage(this.imgFile)
        .subscribe(res => {
          if (res['secure_url']) {
            img_path = res['secure_url'];
            this.eventData.event_banner = img_path;
            uploadContent();
          } else {
            this.toastService.setToastMsg({key: 'alert', severity: 'error', summary: 'Error', detail: 'Error while uploading image'});
            this.loaderService.clearLoader();
          }
        });
    };
    if (this.edit) {
      if (this.imgFile) {
        upload(this.updateEvent.bind(this));
      } else {
        this.updateEvent();
      }
    } else {
      if (this.imgFile) {
        upload(this.uploadEvent.bind(this));
      } else {
        this.uploadEvent();
      }
    }
  }

  getEvents(callback?) {
    this.loaderService.setLoader();
    this.eventService.getEvents().subscribe((events) => {
      this.all_events = events;
      this.loaderService.clearLoader();
      console.log(this.all_events);
      this.event_suggestions = this.all_events;
      if (callback) {
        callback();
      }
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
    this.eventAnnouncementService.setEventID(this.event.id);
    this.all_announcement = Object.assign([], this.event.announcements);
    this.edit = true;
    this.imgFile = null;
    this.eventAnnouncementService.setAnnouncements(this.all_announcement);
    Object.assign(this.eventData, this.event);
  }

  onUpdatedAnnouncements(event_id) {
    const updateAnnouncementContents = (id) =>  {
      this.all_announcement = this.all_events
      .filter(val => val.id === id)
      .map(event => event.announcements)[0];
      this.eventAnnouncementService.setAnnouncements(this.all_announcement);
    };

    this.getEvents(() => {
      updateAnnouncementContents(event_id);
    });
  }

  addEvent() {
    this.clearInput();
    this.event = null;
    this.edit = false;
    this.event_panel = true;
  }

  closePanel() {
    this.event_panel = false;
    this.clearInput();
  }

  editEvent() {
    this.edit = true;
    Object.assign(this.eventData, this.event);
    this.event_panel = true;
  }

  setImage(e) {
    this.imgFile = e.target.files[0];
    console.log(this.imgFile);
  }

  uploadEvent() {
    this.eventService.postEvent(this.eventData)
      .subscribe(res => {
        this.toastService.setToastMsg({key: 'alert', severity: 'success', summary: 'Success', detail: 'Event Uploaded'});
        this.loaderService.clearLoader();
        this.getEvents();
      });
  }

  updateEvent() {
    this.eventService.updateEvent(this.eventData)
    .subscribe(res => {
      this.toastService.setToastMsg({key: 'alert', severity: 'success', summary: 'Updated', detail: 'Event Updated'});
      this.loaderService.clearLoader();
      this.getEvents();
    });
  }

  clearInput() {
    this.eventData.event_banner = '';
    this.eventData.event_name = '';
    this.eventData.announcements = [];
    this.eventData.description = '';
    this.eventData.showAsBanner = false;
    this.eventData.id = '00000000-0000-0000-0000-000000000000';
    this.imgFile = null;
  }

}
