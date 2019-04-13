import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsAnnoucementsCreationComponent } from './boards-annoucements-creation.component';

describe('BoardsAnnoucementsCreationComponent', () => {
  let component: BoardsAnnoucementsCreationComponent;
  let fixture: ComponentFixture<BoardsAnnoucementsCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsAnnoucementsCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsAnnoucementsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
