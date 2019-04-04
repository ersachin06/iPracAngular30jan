import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C29rdfRunTimeValidationComponent } from './c29rdf-run-time-validation.component';

describe('C29rdfRunTimeValidationComponent', () => {
  let component: C29rdfRunTimeValidationComponent;
  let fixture: ComponentFixture<C29rdfRunTimeValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C29rdfRunTimeValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C29rdfRunTimeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
