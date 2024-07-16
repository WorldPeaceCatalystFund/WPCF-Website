import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenUsComponent } from './seen-us.component';

describe('SeenUsComponent', () => {
  let component: SeenUsComponent;
  let fixture: ComponentFixture<SeenUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeenUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
