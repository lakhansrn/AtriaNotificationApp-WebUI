import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAnnoucementsCreationComponent } from './events-annoucements-creation.component';

describe('EventsAnnoucementsCreationComponent', () => {
  let component: EventsAnnoucementsCreationComponent;
  let fixture: ComponentFixture<EventsAnnoucementsCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsAnnoucementsCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsAnnoucementsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





