import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {

  constructor(private _change_detector: ChangeDetectorRef) { }

  // choose no. of banners for slideshow
  no_of_banner_images = 3;
  // interval for slideshow
  interval_slideshow = 4000;
  current_banner = 0;
  slideshow: any;

  @Input() events;
  ngOnInit() {
    this.slideshow = setInterval(() => {
      this._change_detector.markForCheck();
      this.right();
    }, this.interval_slideshow);
  }

  ngOnDestroy(): void {
    clearInterval(this.slideshow);
  }

  banners() {
    return this.events.slice(0, this.no_of_banner_images);
  }

  left() {
    if (this.current_banner === 0) {
      this.current_banner = this.no_of_banner_images - 1;
    } else {
      this.current_banner -= 1;
    }
  }

  right() {
    if (this.current_banner === this.no_of_banner_images - 1) {
      this.current_banner = 0;
    } else {
      this.current_banner += 1;
    }
  }

}
