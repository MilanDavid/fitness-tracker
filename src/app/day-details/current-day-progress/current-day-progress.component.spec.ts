import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDayProgressComponent } from './current-day-progress.component';

describe('CurrentDayProgressComponent', () => {
  let component: CurrentDayProgressComponent;
  let fixture: ComponentFixture<CurrentDayProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentDayProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDayProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
