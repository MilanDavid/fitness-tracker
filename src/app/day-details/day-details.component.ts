import { Component, OnInit, Output, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-day-details',
  templateUrl: './day-details.component.html',
  styleUrls: ['./day-details.component.scss']
})
export class DayDetailsComponent implements AfterContentInit {

  @Output('timestamp') timestamp: string;
  @Output('week') week: string[] = [];
  @Output('setOfDays') daysSet = new Set([]);
  @Output('sumOfSteps') sumOfSteps: number = 0;

  constructor(
    private dataService: DataService,
    activatedRouter: ActivatedRoute
    ) {
      this.timestamp = activatedRouter.snapshot.paramMap.get('timestamp');
      this.dataService.currentDay.subscribe(nextDay => this.timestamp = nextDay);
    }

  ngAfterContentInit() {
    this.dataService.getData().subscribe((data: Array<any>) => {
      data.forEach(el => {
        if (!this.daysSet.has(moment(el.timestamp).format('ddd'))) {
          this.daysSet.add(moment(el.timestamp).format('ddd'));
          this.week.push(el);
        }

        if (el.timestamp == this.timestamp) {
          this.sumOfSteps += el.steps;
        }
      })
    })
    
  }

}
