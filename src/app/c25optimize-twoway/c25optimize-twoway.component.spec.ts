import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C25optimizeTwowayComponent } from './c25optimize-twoway.component';

describe('C25optimizeTwowayComponent', () => {
  let component: C25optimizeTwowayComponent;
  let fixture: ComponentFixture<C25optimizeTwowayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C25optimizeTwowayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C25optimizeTwowayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
