import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseRussiaUkraineComponent } from './case-russia-ukraine.component';

describe('CaseRussiaUkraineComponent', () => {
  let component: CaseRussiaUkraineComponent;
  let fixture: ComponentFixture<CaseRussiaUkraineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseRussiaUkraineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseRussiaUkraineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
