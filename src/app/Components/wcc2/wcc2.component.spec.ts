import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wcc2Component } from './wcc2.component';

describe('Wcc2Component', () => {
  let component: Wcc2Component;
  let fixture: ComponentFixture<Wcc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wcc2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wcc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
