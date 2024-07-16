import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gwaexp1PublicComponent } from './gwaexp1-public.component';

describe('Gwaexp1PublicComponent', () => {
  let component: Gwaexp1PublicComponent;
  let fixture: ComponentFixture<Gwaexp1PublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Gwaexp1PublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gwaexp1PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
