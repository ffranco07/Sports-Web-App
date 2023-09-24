import { TestBed } from '@angular/core/testing';

import { SportFuturesAllDataService } from './sport-futures-all-data.service';

describe('SportFuturesAllDataService', () => {
  let service: SportFuturesAllDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportFuturesAllDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
