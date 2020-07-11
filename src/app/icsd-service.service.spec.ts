import { TestBed } from '@angular/core/testing';

import { IcsdServiceService } from './icsd-service.service';

describe('IcsdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IcsdServiceService = TestBed.get(IcsdServiceService);
    expect(service).toBeTruthy();
  });
});
