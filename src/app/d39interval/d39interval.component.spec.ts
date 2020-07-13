import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D39intervalComponent } from './d39interval.component';

describe('D39intervalComponent', () => {
  let component: D39intervalComponent;
  let fixture: ComponentFixture<D39intervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D39intervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D39intervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
