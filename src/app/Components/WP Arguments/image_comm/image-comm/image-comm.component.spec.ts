import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCommComponent } from './image-comm.component';

describe('ImageCommComponent', () => {
  let component: ImageCommComponent;
  let fixture: ComponentFixture<ImageCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
