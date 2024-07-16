import { TestBed } from '@angular/core/testing';

import { DonateStripeService } from './donate-stripe.service';

describe('DonateStripeService', () => {
  let service: DonateStripeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonateStripeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
