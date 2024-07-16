import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Egypt1Component } from './egypt1.component';

describe('Egypt1Component', () => {
  let component: Egypt1Component;
  let fixture: ComponentFixture<Egypt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Egypt1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Egypt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
