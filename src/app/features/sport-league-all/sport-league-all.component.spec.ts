import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportLeagueAllComponent } from './sport-league-all.component';

describe('SportLeagueAllComponent', () => {
  let component: SportLeagueAllComponent;
  let fixture: ComponentFixture<SportLeagueAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportLeagueAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportLeagueAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
