import { TestBed, inject } from '@angular/core/testing';

import { NotificationGeneratedService } from './notification-generated.service';

describe('NotificationGeneratedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationGeneratedService]
    });
  });

  it('should be created', inject([NotificationGeneratedService], (service: NotificationGeneratedService) => {
    expect(service).toBeTruthy();
  }));
});
