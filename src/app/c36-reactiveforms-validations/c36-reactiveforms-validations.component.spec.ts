import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C36ReactiveformsValidationsComponent } from './c36-reactiveforms-validations.component';

describe('C36ReactiveformsValidationsComponent', () => {
  let component: C36ReactiveformsValidationsComponent;
  let fixture: ComponentFixture<C36ReactiveformsValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C36ReactiveformsValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C36ReactiveformsValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
