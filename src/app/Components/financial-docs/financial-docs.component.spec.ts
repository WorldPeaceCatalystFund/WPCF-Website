import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialDocsComponent } from './financial-docs.component';

describe('FinancialDocsComponent', () => {
  let component: FinancialDocsComponent;
  let fixture: ComponentFixture<FinancialDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
