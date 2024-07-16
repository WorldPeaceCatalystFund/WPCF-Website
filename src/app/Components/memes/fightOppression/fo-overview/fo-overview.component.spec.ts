import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoOverviewComponent } from './fo-overview.component';

describe('FoOverviewComponent', () => {
  let component: FoOverviewComponent;
  let fixture: ComponentFixture<FoOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
