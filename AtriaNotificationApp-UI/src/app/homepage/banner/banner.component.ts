import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from '../../_services';
import { Banner } from './banner.model';
import { BannerService } from '../services/banner.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(carouselConfig: NgbCarouselConfig,
    private loaderService: LoaderService,
    private bannerService: BannerService) {
    carouselConfig.interval = 6000;
  }

  bannerEvents: Array<Banner>;

  @Input()
  ngOnInit() {
    this.initBanner();
  }

  private initBanner() {
    this.loaderService.setLoader();
    this.bannerService.getBanners().subscribe(banners => {
      this.loaderService.clearLoader();
      this.bannerEvents = banners;
    });
  }
}
