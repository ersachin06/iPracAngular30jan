import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C32ReformAn1Component } from './c32-reform-an1.component';

describe('C32ReformAn1Component', () => {
  let component: C32ReformAn1Component;
  let fixture: ComponentFixture<C32ReformAn1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C32ReformAn1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C32ReformAn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
