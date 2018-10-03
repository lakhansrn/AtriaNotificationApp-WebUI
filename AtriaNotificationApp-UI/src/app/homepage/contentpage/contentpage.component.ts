import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Content } from '../../model/content.model';

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css']
})
export class ContentpageComponent implements OnInit, OnChanges {

  @Input() contentData;
  @Input() display;
  @Input() infiniteScroll = true;
  @Output() closeContent = new EventEmitter<Boolean>();
  content_data: Content[];
  current_data: Content;
  current_index: number;
  hideLeftArrow: boolean;
  hideRightArrow: boolean;

  // tslint:disable-next-line:max-line-length
  profile_icon = 'https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest/scale-to-width-down/480?cb=20171030104015';
  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    let i = 0;
    if (changes.contentData) {
      this.content_data = changes.contentData.currentValue.map(val => {
        val['id'] = i++;
        return val;
      });
    }
    this.current_index = 0;
    this.current_data = this.content_data[this.current_index];
  }

  hideContent() {
    this.closeContent.emit(this.display);
  }

  changeContent(i) {
    this.current_data = this.content_data[i];
  }

  move(val) {
    if (val >= 1) {
      if (this.current_index === this.content_data.length - 1) {
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
          this.current_index = this.content_data.length - 1;
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
        return this.current_index === this.contentData.length - 1;
      } else if (direction < 1) {
        return this.current_index === 0;
      }
    }
  }
}
