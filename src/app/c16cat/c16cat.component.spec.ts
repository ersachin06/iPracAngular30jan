import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C16catComponent } from './c16cat.component';

describe('C16catComponent', () => {
  let component: C16catComponent;
  let fixture: ComponentFixture<C16catComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C16catComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C16catComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
