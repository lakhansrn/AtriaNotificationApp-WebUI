import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayUpcomingComponent } from './today-upcoming.component';

describe('TodayUpcomingComponent', () => {
  let component: TodayUpcomingComponent;
  let fixture: ComponentFixture<TodayUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
