import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../model/content.model';
import { ImageUploadService } from './services/image-upload.service';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {
  content: Content = {
    title: '',
    posted: new Date(),
    image: '',
    postedBy: {
      id: this.temp_guid(),
      name: 'test',
      department: 'cse',
      email: 'test@gmail.com',
      pno: 123
    },
    description: '',
    isApproved: false,
    isActive: false,
  };

  @Input() event_announcement_id;

  preview_image: string;
  showPreview = false;
  image_file: File = null;
  // tslint:disable-next-line:max-line-length
  profile_icon = 'https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest/scale-to-width-down/480?cb=20171030104015';

  constructor(private imageUploadService: ImageUploadService, private eventService: EventService) { }

  ngOnInit() {
  }

  setImage(e) {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (a: any) => {
        this.preview_image = a.target.result;
      };
      reader.readAsDataURL(file);
      this.image_file = e.target.files[0];
    }
  }

  submitContent() {
    let img_path = null;
    this.imageUploadService.uploadImage(this.image_file)
      .subscribe(res => {
        if (res['secure_url']) {
          img_path = res['secure_url'];
          this.content.image = img_path;
          this.eventService.postContent(this.event_announcement_id, this.content)
            .subscribe(result => console.log(result));
        } else {
          alert('There was an error while uploading image');
        }
      });
  }

  closeContent(val: boolean) {
    this.showPreview = val;
  }

  temp_guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
