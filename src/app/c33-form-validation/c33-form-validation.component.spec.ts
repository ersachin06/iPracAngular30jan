import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C33FormValidationComponent } from './c33-form-validation.component';

describe('C33FormValidationComponent', () => {
  let component: C33FormValidationComponent;
  let fixture: ComponentFixture<C33FormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C33FormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C33FormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
