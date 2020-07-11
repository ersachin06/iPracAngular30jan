import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C35ReactiveformsFillingFormComponent } from './c35-reactiveforms-filling-form.component';

describe('C35ReactiveformsFillingFormComponent', () => {
  let component: C35ReactiveformsFillingFormComponent;
  let fixture: ComponentFixture<C35ReactiveformsFillingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C35ReactiveformsFillingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C35ReactiveformsFillingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
