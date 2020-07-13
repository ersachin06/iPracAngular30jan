import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C40consumeserviceComponent } from './c40consumeservice.component';

describe('C40consumeserviceComponent', () => {
  let component: C40consumeserviceComponent;
  let fixture: ComponentFixture<C40consumeserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C40consumeserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C40consumeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
