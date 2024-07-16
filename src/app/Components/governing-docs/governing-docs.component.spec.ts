import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoverningDocsComponent } from './governing-docs.component';

describe('GoverningDocsComponent', () => {
  let component: GoverningDocsComponent;
  let fixture: ComponentFixture<GoverningDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoverningDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoverningDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
