import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C23infoComponent } from './c23info.component';

describe('C23infoComponent', () => {
  let component: C23infoComponent;
  let fixture: ComponentFixture<C23infoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C23infoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C23infoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
