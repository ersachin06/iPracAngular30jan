import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C45FindIndexComponent } from './c45-find-index.component';

describe('C45FindIndexComponent', () => {
  let component: C45FindIndexComponent;
  let fixture: ComponentFixture<C45FindIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C45FindIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C45FindIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
