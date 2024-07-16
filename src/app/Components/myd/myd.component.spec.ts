import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydComponent } from './myd.component';

describe('MydComponent', () => {
  let component: MydComponent;
  let fixture: ComponentFixture<MydComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
