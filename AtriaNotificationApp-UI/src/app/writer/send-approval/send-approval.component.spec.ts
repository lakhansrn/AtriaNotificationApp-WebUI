import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendApprovalComponent } from './send-approval.component';

describe('SendApprovalComponent', () => {
  let component: SendApprovalComponent;
  let fixture: ComponentFixture<SendApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
