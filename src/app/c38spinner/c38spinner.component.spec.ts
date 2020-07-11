import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C38spinnerComponent } from './c38spinner.component';

describe('C38spinnerComponent', () => {
  let component: C38spinnerComponent;
  let fixture: ComponentFixture<C38spinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C38spinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C38spinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
