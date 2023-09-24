import { TestBed } from '@angular/core/testing';

import { SportLeagueDataService } from './sport-league-data.service';

describe('SportLeagueDataService', () => {
  let service: SportLeagueDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportLeagueDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
