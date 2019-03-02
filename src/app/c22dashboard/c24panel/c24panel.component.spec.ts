import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C24panelComponent } from './c24panel.component';

describe('C24panelComponent', () => {
  let component: C24panelComponent;
  let fixture: ComponentFixture<C24panelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C24panelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C24panelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
