import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedBoardsComponent } from './fixed-boards.component';

describe('FixedBoardsComponent', () => {
  let component: FixedBoardsComponent;
  let fixture: ComponentFixture<FixedBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
