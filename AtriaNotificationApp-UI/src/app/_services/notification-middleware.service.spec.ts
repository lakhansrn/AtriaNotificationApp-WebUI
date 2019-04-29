import { TestBed, inject } from '@angular/core/testing';

import { NotificationMiddlewareService } from './notification-middleware.service';

describe('NotificationMiddlewareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationMiddlewareService]
    });
  });

  it('should be created', inject([NotificationMiddlewareService], (service: NotificationMiddlewareService) => {
    expect(service).toBeTruthy();
  }));
});
