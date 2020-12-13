import { TestBed } from '@angular/core/testing';

import { GamingproductService } from './gamingproduct.service';

describe('GamingproductService', () => {
  let service: GamingproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamingproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
