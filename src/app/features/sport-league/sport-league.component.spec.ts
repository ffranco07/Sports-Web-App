import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportLeagueComponent } from './sport-league.component';

describe('SportLeagueComponent', () => {
  let component: SportLeagueComponent;
  let fixture: ComponentFixture<SportLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
