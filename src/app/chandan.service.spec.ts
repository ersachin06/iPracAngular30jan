import { TestBed } from '@angular/core/testing';

import { ChandanService } from './chandan.service';

describe('ChandanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChandanService = TestBed.get(ChandanService);
    expect(service).toBeTruthy();
  });
});
