import { TestBed } from '@angular/core/testing';

import { LordOfTheRingService } from './lord-of-the-ring.service';

describe('LordOfTheRingService', () => {
  let service: LordOfTheRingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LordOfTheRingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
