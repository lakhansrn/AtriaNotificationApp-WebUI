import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Content } from '../model/content.model';
import { EventService, ImageUploadService, UserService, LoaderService, ToastService } from '../_services';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {
  user_content: Content;
  empty_content: Content = {
    id: '00000000-0000-0000-0000-000000000000',
    title: '',
    posted: new Date(),
    image: '',
    postedBy: {
      id: '00000000-0000-0000-0000-000000000000',
      name: '',
      department: '',
      email: '',
      pno: 0
    },
    description: '',
    isApproved: false,
    isActive: false,
  };

  @Input() event_announcement_id;
  @Input() set content(content: Content) {
    this.user_content = content || this.empty_content;
  }
  @Input() edit = false;
  @Output() clearInputChoices = new EventEmitter();

  preview_image: string;
  showPreview = false;
  image_file: File = null;
  // tslint:disable-next-line:max-line-length
  profile_icon = 'https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest/scale-to-width-down/480?cb=20171030104015';

  constructor(private imageUploadService: ImageUploadService,
    private eventService: EventService,
    private loaderService: LoaderService,
    private toastService: ToastService,
    private userService: UserService) {
    }

  ngOnInit() {
    this.loaderService.setLoader();
    this.userService.getDetails()
      .subscribe(res => {
        this.loaderService.clearLoader();
        if (res) {
          const { firstName, lastName, department, email, pno } = res;
          this.empty_content.postedBy.name = firstName + ' ' + lastName;
          this.empty_content.postedBy.department = department;
          this.empty_content.postedBy.email = email;
          this.empty_content.postedBy.pno = pno;
          console.log(this.user_content);
        }
      });
  }

  setImage(e) {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (a: any) => {
        this.user_content.image = a.target.result;
      };
      reader.readAsDataURL(file);
      this.image_file = e.target.files[0];
    }
  }

  submitContent() {
    const upload = (uploadContent) => {
      let img_path = null;
      this.loaderService.setLoader();
      this.imageUploadService.uploadImage(this.image_file)
        .subscribe(res => {
          if (res['secure_url']) {
            img_path = res['secure_url'];
            this.user_content.image = img_path;
            uploadContent();
          } else {
            this.loaderService.clearLoader();
            this.toastService.setToastMsg({key: 'alert', severity: 'error', summary: 'Error', detail: 'Error while uploading image'});
          }
        });
    };

    if (this.edit) {
        this.loaderService.setLoader();
        this.updateContentRequest();
    } else {
      upload(this.postContentRequest.bind(this));
    }
  }

  postContentRequest() {
    this.eventService.postContent(this.event_announcement_id, this.user_content)
      .subscribe(result => {
        this.loaderService.clearLoader();
        this.toastService.setToastMsg({key: 'alert', severity: 'success', summary: 'Success', detail: 'Content Posted!'});
        this.user_content = null;
      });
  }

  updateContentRequest() {
    this.eventService.updateContent(this.event_announcement_id, this.user_content)
    .subscribe(result => {
      this.loaderService.clearLoader();
      this.toastService.setToastMsg({key: 'alert', severity: 'success', summary: 'Success', detail: 'Content Updated!'});
    });
  }

  closeContent(val: boolean) {
    this.showPreview = val;
  }

}
