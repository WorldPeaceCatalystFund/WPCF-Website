import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationFunnel2Component } from './donation-funnel2.component';

describe('DonationFunnel2Component', () => {
  let component: DonationFunnel2Component;
  let fixture: ComponentFixture<DonationFunnel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationFunnel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationFunnel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
