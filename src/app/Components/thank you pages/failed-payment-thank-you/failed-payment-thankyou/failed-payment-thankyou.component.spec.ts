import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedPaymentThankyouComponent } from './failed-payment-thankyou.component';

describe('FailedPaymentThankyouComponent', () => {
  let component: FailedPaymentThankyouComponent;
  let fixture: ComponentFixture<FailedPaymentThankyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedPaymentThankyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedPaymentThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
