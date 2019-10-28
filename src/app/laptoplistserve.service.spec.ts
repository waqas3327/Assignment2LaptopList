import { TestBed } from '@angular/core/testing';

import { LaptoplistserveService } from './laptoplistserve.service';

describe('LaptoplistserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaptoplistserveService = TestBed.get(LaptoplistserveService);
    expect(service).toBeTruthy();
  });
});
