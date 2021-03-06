import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Announcement } from '../../model/announcement.model';
import { BoardService, ImageUploadService, LoaderService, ToastService } from '../../_services';
import { BoardAnnouncementCreationService } from '../service/board-announcement-creation.service';
import { NotificationGeneratedService, NotificationModel } from '../../_services';
import { environment } from '../../../environments/environment';

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
    posted: '',
    showAsBanner: false,
  };

  constructor(
    private boardService: BoardService,
    private imageUploadService: ImageUploadService,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private boardAnnouncementService: BoardAnnouncementCreationService,
    private notificationService: NotificationGeneratedService
  ) { }

  ngOnInit() {
    this.boardAnnouncementService.announcements.subscribe(res => {
      this.all_announcement = res;
      this.announcement = null;
      this.edit = false;
      this.announcement_panel = false;
      this.announcement_suggestions = res;
    });
    this.boardAnnouncementService.boardID.subscribe(res => {
      this.eventid = res;
    });
  }

  announcementSubmit() {
    let success_submit = true;

    this.loaderService.setLoader();
    const upload = (uploadContent) => {
      this.imageUploadService.uploadImage(this.imgFile)
        .subscribe(res => {
          if (res['secure_url']) {
            // image sent successfully
            this.announcementData.img = res['secure_url'];
            success_submit = true;
            uploadContent();
          } else {
            success_submit = false;
            this.toastService.setToastMsg({key: 'alert', severity: 'error', summary: 'Error', detail: 'Error while uploading image'});
            this.loaderService.clearLoader();
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

    if (success_submit) {
      this.notificationService.broadcast(<NotificationModel> {
        message: this.announcementData.description,
        title: this.announcementData.title,
        url: environment.apiEndPoint
      }).subscribe(res => console.log(res));
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
    this.boardService.updateAnnouncement(this.eventid, this.announcementData)
    .subscribe(res => {
      this.loaderService.clearLoader();
      this.updatedAnnouncements.emit(this.eventid);
      this.toastService.setToastMsg({key: 'alert', severity: 'success', summary: 'Success', detail: 'Announcement Updated'});
    });
  }

  uploadAnnouncement() {
    this.boardService.postAnnouncement(this.eventid, this.announcementData)
    .subscribe(res => {
      this.loaderService.clearLoader();
      this.updatedAnnouncements.emit(this.eventid);
      this.toastService.setToastMsg({key: 'alert', severity: 'success', summary: 'Success', detail: 'Announcement Uploaded'});
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


