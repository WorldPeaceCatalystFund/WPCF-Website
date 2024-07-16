import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereverComponent } from './wherever.component';

describe('WhereverComponent', () => {
  let component: WhereverComponent;
  let fixture: ComponentFixture<WhereverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhereverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
