import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCccpComponent } from './program-cccp.component';

describe('ProgramCccpComponent', () => {
  let component: ProgramCccpComponent;
  let fixture: ComponentFixture<ProgramCccpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramCccpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramCccpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
