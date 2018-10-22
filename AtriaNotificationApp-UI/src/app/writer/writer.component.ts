import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../model/content.model';


@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {
  content: Content = {
    id: '',
    title: '',
    posted: '',
    image: '',
    postedBy: {
      id: '',
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
  // tslint:disable-next-line:max-line-length
  profile_icon = 'https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest/scale-to-width-down/480?cb=20171030104015';

  constructor() { }

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
    }
  }

  submitContent() {
    console.log(this.content, this.event_announcement_id);
  }

}
