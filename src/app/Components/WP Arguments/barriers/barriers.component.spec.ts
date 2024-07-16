import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarriersComponent } from './barriers.component';

describe('BarriersComponent', () => {
  let component: BarriersComponent;
  let fixture: ComponentFixture<BarriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarriersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
