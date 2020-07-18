import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C43stepbystepFormComponent } from './c43stepbystep-form.component';

describe('C43stepbystepFormComponent', () => {
  let component: C43stepbystepFormComponent;
  let fixture: ComponentFixture<C43stepbystepFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C43stepbystepFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C43stepbystepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
