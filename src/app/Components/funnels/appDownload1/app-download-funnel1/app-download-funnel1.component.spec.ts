import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDownloadFunnel1Component } from './app-download-funnel1.component';

describe('AppDownloadFunnel1Component', () => {
  let component: AppDownloadFunnel1Component;
  let fixture: ComponentFixture<AppDownloadFunnel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDownloadFunnel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDownloadFunnel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
