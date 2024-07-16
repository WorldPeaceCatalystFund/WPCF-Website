import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeThankYouComponent } from './subscribe-thank-you.component';

describe('SubscribeThankYouComponent', () => {
  let component: SubscribeThankYouComponent;
  let fixture: ComponentFixture<SubscribeThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeThankYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
