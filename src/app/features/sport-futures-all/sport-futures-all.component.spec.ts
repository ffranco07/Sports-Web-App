import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportFuturesAllComponent } from './sport-futures-all.component';

describe('SportFuturesAllComponent', () => {
  let component: SportFuturesAllComponent;
  let fixture: ComponentFixture<SportFuturesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportFuturesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportFuturesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
