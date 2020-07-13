import { TestBed } from '@angular/core/testing';

import { Data2componentlevelService } from './data2componentlevel.service';

describe('Data2componentlevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Data2componentlevelService = TestBed.get(Data2componentlevelService);
    expect(service).toBeTruthy();
  });
});
