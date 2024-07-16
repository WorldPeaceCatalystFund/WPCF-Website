import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlethiometerComponent } from './alethiometer.component';

describe('AlethiometerComponent', () => {
  let component: AlethiometerComponent;
  let fixture: ComponentFixture<AlethiometerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlethiometerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlethiometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
