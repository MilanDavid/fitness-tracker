import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-current-day-details',
  templateUrl: './current-day-details.component.html',
  styleUrls: ['./current-day-details.component.scss']
})
export class CurrentDayDetailsComponent implements OnChanges {

  @Input('timestamp') timestamp:string;
  @Input('sumOfSteps') sumOfSteps: number;

  constructor(
    private dataSerivce: DataService
  ) { }

  ngOnChanges() {
    this.dataSerivce.getTotalStepsPerDay(this.timestamp).subscribe(totalSteps => {
      this.sumOfSteps = totalSteps;
    });
  }

}
