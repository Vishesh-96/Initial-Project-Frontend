import { TestBed } from '@angular/core/testing';

import { PartDetailsService } from './part-details.service';

describe('PartDetailsService', () => {
  let service: PartDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
