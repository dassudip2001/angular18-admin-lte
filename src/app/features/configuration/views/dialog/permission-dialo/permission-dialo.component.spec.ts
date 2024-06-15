import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionDialoComponent } from './permission-dialo.component';

describe('PermissionDialoComponent', () => {
  let component: PermissionDialoComponent;
  let fixture: ComponentFixture<PermissionDialoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionDialoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PermissionDialoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
