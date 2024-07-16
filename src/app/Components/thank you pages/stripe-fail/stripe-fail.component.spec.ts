import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeFailComponent } from './stripe-fail.component';

describe('StripeFailComponent', () => {
  let component: StripeFailComponent;
  let fixture: ComponentFixture<StripeFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeFailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StripeFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
