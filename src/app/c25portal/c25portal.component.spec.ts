import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C25portalComponent } from './c25portal.component';

describe('C25portalComponent', () => {
  let component: C25portalComponent;
  let fixture: ComponentFixture<C25portalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C25portalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C25portalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
