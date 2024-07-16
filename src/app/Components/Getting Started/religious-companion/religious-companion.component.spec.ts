import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiousCompanionComponent } from './religious-companion.component';

describe('ReligiousCompanionComponent', () => {
  let component: ReligiousCompanionComponent;
  let fixture: ComponentFixture<ReligiousCompanionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligiousCompanionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligiousCompanionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
