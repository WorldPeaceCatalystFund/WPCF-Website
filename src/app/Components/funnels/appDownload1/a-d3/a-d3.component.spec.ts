import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AD3Component } from './a-d3.component';

describe('AD3Component', () => {
  let component: AD3Component;
  let fixture: ComponentFixture<AD3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AD3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
