import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C30EmpInsertDelUpdateSelectComponent } from './c30-emp-insert-del-update-select.component';

describe('C30EmpInsertDelUpdateSelectComponent', () => {
  let component: C30EmpInsertDelUpdateSelectComponent;
  let fixture: ComponentFixture<C30EmpInsertDelUpdateSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C30EmpInsertDelUpdateSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C30EmpInsertDelUpdateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
