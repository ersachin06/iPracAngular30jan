import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C28reactiveformComponent } from './c28reactiveform.component';

describe('C28reactiveformComponent', () => {
  let component: C28reactiveformComponent;
  let fixture: ComponentFixture<C28reactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C28reactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C28reactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
