import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldPeaceMovementComponent } from './world-peace-movement.component';

describe('WorldPeaceMovementComponent', () => {
  let component: WorldPeaceMovementComponent;
  let fixture: ComponentFixture<WorldPeaceMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldPeaceMovementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldPeaceMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
