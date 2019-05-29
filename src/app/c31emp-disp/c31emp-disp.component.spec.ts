import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C31empDispComponent } from './c31emp-disp.component';

describe('C31empDispComponent', () => {
  let component: C31empDispComponent;
  let fixture: ComponentFixture<C31empDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C31empDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C31empDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
