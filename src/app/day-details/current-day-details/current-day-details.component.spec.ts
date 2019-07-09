import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDayDetailsComponent } from './current-day-details.component';

describe('CurrentDayDetailsComponent', () => {
  let component: CurrentDayDetailsComponent;
  let fixture: ComponentFixture<CurrentDayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentDayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
