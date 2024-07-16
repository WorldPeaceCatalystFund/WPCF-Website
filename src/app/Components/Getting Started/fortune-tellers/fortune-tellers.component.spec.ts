import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortuneTellersComponent } from './fortune-tellers.component';

describe('FortuneTellersComponent', () => {
  let component: FortuneTellersComponent;
  let fixture: ComponentFixture<FortuneTellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortuneTellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortuneTellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
