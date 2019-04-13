import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCarouselComponent } from './board-carousel.component';

describe('BoardCarouselComponent', () => {
  let component: BoardCarouselComponent;
  let fixture: ComponentFixture<BoardCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
