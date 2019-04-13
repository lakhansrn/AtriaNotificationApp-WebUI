import { TestBed, inject } from '@angular/core/testing';

import { BoardAnnouncementCreationService } from './board-announcement-creation.service';

describe('BoardAnnouncementCreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardAnnouncementCreationService]
    });
  });

  it('should be created', inject([BoardAnnouncementCreationService], (service: BoardAnnouncementCreationService) => {
    expect(service).toBeTruthy();
  }));
});
