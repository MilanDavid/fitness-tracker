import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-current-day-progress',
  templateUrl: './current-day-progress.component.html',
  styleUrls: ['./current-day-progress.component.scss']
})
export class CurrentDayProgressComponent implements OnChanges{

  @Input('sumOfSteps') sumOfSteps: number;

  totalKm: number = 0;
  totalCal: number = 0;
  totalHours: number = 0;

  constructor() { }

  ngOnChanges() {
    this.totalKm = (this.sumOfSteps * 0.762) / 1000;
    this.totalCal = this.sumOfSteps * 0.05;
    this.totalHours = (this.sumOfSteps * 0.5) / 3600;
  }

}
