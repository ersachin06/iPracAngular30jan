import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C39ObservableSlidesComponent } from './c39-observable-slides.component';

describe('C39ObservableSlidesComponent', () => {
  let component: C39ObservableSlidesComponent;
  let fixture: ComponentFixture<C39ObservableSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C39ObservableSlidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C39ObservableSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
