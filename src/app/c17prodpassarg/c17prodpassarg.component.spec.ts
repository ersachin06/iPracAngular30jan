import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C17prodpassargComponent } from './c17prodpassarg.component';

describe('C17prodpassargComponent', () => {
  let component: C17prodpassargComponent;
  let fixture: ComponentFixture<C17prodpassargComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C17prodpassargComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C17prodpassargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
