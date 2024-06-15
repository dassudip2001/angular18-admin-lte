import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSidedarComponent } from './main-sidedar.component';

describe('MainSidedarComponent', () => {
  let component: MainSidedarComponent;
  let fixture: ComponentFixture<MainSidedarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSidedarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainSidedarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
