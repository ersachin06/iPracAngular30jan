import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C38UsingObjservableComponent } from './c38-using-objservable.component';

describe('C38UsingObjservableComponent', () => {
  let component: C38UsingObjservableComponent;
  let fixture: ComponentFixture<C38UsingObjservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C38UsingObjservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C38UsingObjservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
