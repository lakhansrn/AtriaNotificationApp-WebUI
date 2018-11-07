import { TestBed, inject } from '@angular/core/testing';

import { EventAnnouncementCreationService } from './event-announcement-creation.service';

describe('EventAnnouncementCreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventAnnouncementCreationService]
    });
  });

  it('should be created', inject([EventAnnouncementCreationService], (service: EventAnnouncementCreationService) => {
    expect(service).toBeTruthy();
  }));
});
