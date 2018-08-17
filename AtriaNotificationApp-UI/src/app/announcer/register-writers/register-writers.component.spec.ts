import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWritersComponent } from './register-writers.component';

describe('RegisterWritersComponent', () => {
  let component: RegisterWritersComponent;
  let fixture: ComponentFixture<RegisterWritersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWritersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWritersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
