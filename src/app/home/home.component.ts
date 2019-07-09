import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output('week') week: string[] = [];
  @Output('setOfDays') daysSet = new Set([]);
  @Output('totalSteps') totalSteps = 0;
  @Output('burnedCalories') burnedCalories = 0;
  @Output('averageHour') averageHour: number;
  @Output('averageMinutes') averageMinutes: number;
  @Output('dailyTotals') dailyTotals = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    // getting data via service
    this.dataService.getData().subscribe((data: Array<any>) => {
      let currentDayTotal = 0;
      let sumOfMinutes = 0;

      // getting only unique dates
      data.forEach(el => {
        let currentDay = moment(el.timestamp).format('ddd');
        let index = data.indexOf(el);
        let nextDay;

        this.burnedCalories += el.steps;
        this.totalSteps += el.steps;
        
        if (!this.daysSet.has(moment(el.timestamp).format('ddd'))) {
          this.daysSet.add(moment(el.timestamp).format('ddd'));
          this.week.push(el);
        }

        // check if there is next day
        if (data[index + 1]) {
          nextDay = moment(data[index + 1].timestamp).format('ddd');
        }

        // check if its last entry for the day and if next day exist
        if (currentDay !== nextDay || nextDay === undefined) {

          currentDayTotal += el.steps;
          this.dailyTotals.push({ day: currentDay, total: Math.round((currentDayTotal * 0.5) / 60) });
          currentDayTotal = 0;

        } else {

          if (!this.daysSet.has(currentDay)) {
            this.daysSet.add(currentDay);
            currentDayTotal += el.steps;
          } else {
            currentDayTotal += el.steps;
          }

        }
      });
      this.burnedCalories = Math.round(this.burnedCalories * 0.05);

      // get sum of minutes walked by day
      this.dailyTotals.forEach(el => {
        sumOfMinutes += el.total;
      })

      // assign values to be displayed
      this.averageHour = Math.round((sumOfMinutes / 5) / 60);
      this.averageMinutes = Math.round((sumOfMinutes / 5) % 60);

    })
  }
}
