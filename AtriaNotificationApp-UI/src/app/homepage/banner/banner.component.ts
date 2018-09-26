import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../model/event.model';
import { Banner } from './banner.model';
import { BannerService } from '../services/banner.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(carouselConfig: NgbCarouselConfig, private bannerService: BannerService) {
    carouselConfig.interval = 6000;
  }

  bannerEvents: Array<Banner>;

  @Input()
  ngOnInit() {
    this.initBanner();
  }

  private initBanner() {
    this.bannerService.getBanners().subscribe(banners => {
      this.bannerEvents = banners;
    });
  }
}
