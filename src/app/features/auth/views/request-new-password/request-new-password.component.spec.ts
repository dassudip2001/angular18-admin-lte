import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewPasswordComponent } from './request-new-password.component';

describe('RequestNewPasswordComponent', () => {
  let component: RequestNewPasswordComponent;
  let fixture: ComponentFixture<RequestNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestNewPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
