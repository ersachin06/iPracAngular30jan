import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C41consueservice2Component } from './c41consueservice2.component';

describe('C41consueservice2Component', () => {
  let component: C41consueservice2Component;
  let fixture: ComponentFixture<C41consueservice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C41consueservice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C41consueservice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
