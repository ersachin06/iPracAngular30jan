import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C21viewuserComponent } from './c21viewuser.component';

describe('C21viewuserComponent', () => {
  let component: C21viewuserComponent;
  let fixture: ComponentFixture<C21viewuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C21viewuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C21viewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
