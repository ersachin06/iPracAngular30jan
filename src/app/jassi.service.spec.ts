import { TestBed } from '@angular/core/testing';

import { JassiService } from './jassi.service';

describe('JassiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JassiService = TestBed.get(JassiService);
    expect(service).toBeTruthy();
  });
});
