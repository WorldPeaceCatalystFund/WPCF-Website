import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDownloadFunnel2Component } from './app-download-funnel2.component';

describe('AppDownloadFunnel2Component', () => {
  let component: AppDownloadFunnel2Component;
  let fixture: ComponentFixture<AppDownloadFunnel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDownloadFunnel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDownloadFunnel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
