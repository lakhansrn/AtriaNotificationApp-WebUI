import { TestBed } from '@angular/core/testing';

import { EventCarouselService } from './event-carousel.service';

describe('EventCarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventCarouselService = TestBed.get(EventCarouselService);
    expect(service).toBeTruthy();
  });
});
