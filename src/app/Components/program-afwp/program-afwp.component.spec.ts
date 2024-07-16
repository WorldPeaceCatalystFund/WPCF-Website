import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramAfwpComponent } from './program-afwp.component';

describe('ProgramAfwpComponent', () => {
  let component: ProgramAfwpComponent;
  let fixture: ComponentFixture<ProgramAfwpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramAfwpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramAfwpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
