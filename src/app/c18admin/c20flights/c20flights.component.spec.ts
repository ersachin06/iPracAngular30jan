import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C20flightsComponent } from './c20flights.component';

describe('C20flightsComponent', () => {
  let component: C20flightsComponent;
  let fixture: ComponentFixture<C20flightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C20flightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C20flightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
