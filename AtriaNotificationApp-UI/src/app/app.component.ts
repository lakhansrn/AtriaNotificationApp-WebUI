import { Component } from '@angular/core';
import { NotificationMiddlewareService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private notificationMiddlewareService: NotificationMiddlewareService) {
    this.notificationMiddlewareService.init();
  }
}
