import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymityComponent } from './anonymity.component';

describe('AnonymityComponent', () => {
  let component: AnonymityComponent;
  let fixture: ComponentFixture<AnonymityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
