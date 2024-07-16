import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationFunnel3Component } from './donation-funnel3.component';

describe('DonationFunnel3Component', () => {
  let component: DonationFunnel3Component;
  let fixture: ComponentFixture<DonationFunnel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationFunnel3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationFunnel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
