import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GWAExp1Component } from './gwaexp1.component';

describe('GWAExp1Component', () => {
  let component: GWAExp1Component;
  let fixture: ComponentFixture<GWAExp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GWAExp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GWAExp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
