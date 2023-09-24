import { TestBed } from '@angular/core/testing';

import { SportLeagueAllDataService } from './sport-league-all-data.service';

describe('SportLeagueAllDataService', () => {
  let service: SportLeagueAllDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportLeagueAllDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
