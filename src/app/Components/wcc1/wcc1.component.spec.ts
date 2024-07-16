import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wcc1Component } from './wcc1.component';

describe('Wcc1Component', () => {
  let component: Wcc1Component;
  let fixture: ComponentFixture<Wcc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wcc1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wcc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
