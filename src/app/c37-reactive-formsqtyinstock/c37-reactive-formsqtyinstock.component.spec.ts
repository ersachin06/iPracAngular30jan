import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C37ReactiveFormsqtyinstockComponent } from './c37-reactive-formsqtyinstock.component';

describe('C37ReactiveFormsqtyinstockComponent', () => {
  let component: C37ReactiveFormsqtyinstockComponent;
  let fixture: ComponentFixture<C37ReactiveFormsqtyinstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C37ReactiveFormsqtyinstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C37ReactiveFormsqtyinstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
