import { TestBed } from '@angular/core/testing';

import { GetTsrDetailsService } from './get-tsr-details.service';

describe('GetTsrDetailsService', () => {
  let service: GetTsrDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTsrDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
