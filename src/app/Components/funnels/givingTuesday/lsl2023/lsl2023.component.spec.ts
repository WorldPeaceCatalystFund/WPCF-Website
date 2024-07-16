import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lsl2023Component } from './lsl2023.component';

describe('Lsl2023Component', () => {
  let component: Lsl2023Component;
  let fixture: ComponentFixture<Lsl2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lsl2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lsl2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
