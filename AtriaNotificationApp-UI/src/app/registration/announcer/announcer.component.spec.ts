import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncerRegistrationComponent } from './announcer.component';

describe('AnnouncerComponent', () => {
  let component: AnnouncerRegistrationComponent;
  let fixture: ComponentFixture<AnnouncerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncerRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
