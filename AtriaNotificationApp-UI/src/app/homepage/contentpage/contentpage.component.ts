import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css']
})
export class ContentpageComponent implements OnInit {

  @Input() contentData;
  @Input() display;
  @Output() closeContent = new EventEmitter<Boolean>();

  // tslint:disable-next-line:max-line-length
  profile_icon = 'https://vignette.wikia.nocookie.net/bungostraydogs/images/1/1e/Profile-icon-9.png/revision/latest/scale-to-width-down/480?cb=20171030104015';
  constructor() { }

  ngOnInit() {
  }

  hideContent() {
    this.closeContent.emit(this.display);
  }
}
