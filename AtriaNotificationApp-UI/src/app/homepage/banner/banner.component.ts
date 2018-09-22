import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Event } from '../../model/event.model';
import { Banner } from './banner.model';
import { BannerService } from '../services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {

  constructor(private _change_detector: ChangeDetectorRef, private bannerService: BannerService) { }

  // choose no. of banners for slideshow
  // no_of_banner_images = 3;
  // interval for slideshow
  interval_slideshow = 60000;
  current_banner = 0;
  slideshow: any;
  bannerEvents: Array<Banner>;

  @Input()
  ngOnInit() {
    this.initBanner();
  }

  private initBanner() {

    this.bannerService.getBanners().subscribe(banners => {
      this.bannerEvents = banners;
      this.slideshow = setInterval(() => {
        this._change_detector.markForCheck();
        this.changeSlide(+1, this.current_banner);
      }, this.interval_slideshow);
    }
      );
  }

  filterEvents(events): Array<Banner> {
    const localEvents = events.filter(val => val.showAsBanner === true );

    let i = 0;
    const banners = Array<Banner>();

    localEvents.forEach(element => {
      const banner = <Banner>{
        id: i++,
        img: element.event_banner,
        title: element.event_name
      };

      banners.push(banner);
    });
    return banners;
  }

  ngOnDestroy(): void {
    clearInterval(this.slideshow);
  }

  changeSlide(val, id: number) {

    if (val > 0) {
      if ( id === this.bannerEvents.length - 1) {
        this.current_banner = 0;
      } else {
        this.current_banner += val;
      }
    } else {
      if ( id === 0) {
        this.current_banner = this.bannerEvents.length - 1;
      } else {
        this.current_banner += val;
      }
    }

  }
}
