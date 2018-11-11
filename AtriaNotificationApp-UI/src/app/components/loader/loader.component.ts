import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../_services';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  load: boolean;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.setLoader$.subscribe(res => this.load = res);
  }

}
