import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsComponent } from './contents.component';

describe('ContentsComponent', () => {
  let component: ContentsComponent;
  let fixture: ComponentFixture<ContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
