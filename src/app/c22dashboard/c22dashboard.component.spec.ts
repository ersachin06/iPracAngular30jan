import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C22dashboardComponent } from './c22dashboard.component';

describe('C22dashboardComponent', () => {
  let component: C22dashboardComponent;
  let fixture: ComponentFixture<C22dashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C22dashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C22dashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
