import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vsl2023Component } from './vsl2023.component';

describe('Vsl2023Component', () => {
  let component: Vsl2023Component;
  let fixture: ComponentFixture<Vsl2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vsl2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vsl2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
