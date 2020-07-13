import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C42componnetlevelserviceComponent } from './c42componnetlevelservice.component';

describe('C42componnetlevelserviceComponent', () => {
  let component: C42componnetlevelserviceComponent;
  let fixture: ComponentFixture<C42componnetlevelserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C42componnetlevelserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C42componnetlevelserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
