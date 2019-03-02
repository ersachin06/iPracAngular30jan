import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C19airlinesComponent } from './c19airlines.component';

describe('C19airlinesComponent', () => {
  let component: C19airlinesComponent;
  let fixture: ComponentFixture<C19airlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C19airlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C19airlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
