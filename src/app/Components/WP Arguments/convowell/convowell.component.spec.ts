import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvowellComponent } from './convowell.component';

describe('ConvowellComponent', () => {
  let component: ConvowellComponent;
  let fixture: ComponentFixture<ConvowellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvowellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvowellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
