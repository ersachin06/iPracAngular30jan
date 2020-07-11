import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C34AReactiveFormsModuleComponent } from './c34-a-reactive-forms-module.component';

describe('C34AReactiveFormsModuleComponent', () => {
  let component: C34AReactiveFormsModuleComponent;
  let fixture: ComponentFixture<C34AReactiveFormsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C34AReactiveFormsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C34AReactiveFormsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
