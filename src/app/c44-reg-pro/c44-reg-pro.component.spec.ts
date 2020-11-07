import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C44RegProComponent } from './c44-reg-pro.component';

describe('C44RegProComponent', () => {
  let component: C44RegProComponent;
  let fixture: ComponentFixture<C44RegProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C44RegProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C44RegProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
