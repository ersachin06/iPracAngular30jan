import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C18adminComponent } from './c18admin.component';

describe('C18adminComponent', () => {
  let component: C18adminComponent;
  let fixture: ComponentFixture<C18adminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C18adminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C18adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
