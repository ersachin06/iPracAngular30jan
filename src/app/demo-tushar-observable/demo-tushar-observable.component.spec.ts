import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTusharObservableComponent } from './demo-tushar-observable.component';

describe('DemoTusharObservableComponent', () => {
  let component: DemoTusharObservableComponent;
  let fixture: ComponentFixture<DemoTusharObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTusharObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTusharObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
