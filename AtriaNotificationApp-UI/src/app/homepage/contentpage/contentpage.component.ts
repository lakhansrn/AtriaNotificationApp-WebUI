import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css']
})
export class ContentpageComponent implements OnInit {

  @Input() contents;
  @Input() display;
  @Input() infiniteScroll = true;
  @Input() current_data;
  @Output() closeContent = new EventEmitter<Boolean>();
  current_index = 0;
  hideLeftArrow: boolean;
  hideRightArrow: boolean;

  // tslint:disable-next-line:max-line-length
  profile_icon = 'https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest/scale-to-width-down/480?cb=20171030104015';
  constructor() {
  }

  ngOnInit() {
  }

  hideContent() {
    this.closeContent.emit(false);
  }

  changeContent(i) {
    this.current_data = this.contents[i];
  }

  move(val) {
    if (val >= 1) {
      if (this.current_index === this.contents.length - 1) {
        if (this.infiniteScroll) {
          this.current_index = 0;
        }
      } else {
        this.current_index += val;
      }
      this.changeContent(this.current_index);
    } else if (val < 1) {
      if (this.current_index === 0) {
        if (this.infiniteScroll) {
          this.current_index = this.contents.length - 1;
        }
      } else {
        this.current_index += val;
      }
      this.changeContent(this.current_index);
    }
  }

  arrowClass(direction) {
    if (!this.infiniteScroll) {
      if (direction >= 1) {
        return this.current_index === this.contents.length - 1;
      } else if (direction < 1) {
        return this.current_index === 0;
      }
    }
  }
}
