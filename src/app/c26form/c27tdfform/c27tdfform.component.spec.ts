import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C27tdfformComponent } from './c27tdfform.component';

describe('C27tdfformComponent', () => {
  let component: C27tdfformComponent;
  let fixture: ComponentFixture<C27tdfformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C27tdfformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C27tdfformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
