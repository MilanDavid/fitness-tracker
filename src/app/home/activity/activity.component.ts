import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  averageHour: number;
  averageMinutes: number;
  dailyTotals = [];
  daysSet = new Set([]);

  constructor(private dataService: DataService) { }

  ngOnInit() {

    // getting data via service
    this.dataService.getData().subscribe((data: Array<any>) => {
      let currentDayTotal = 0;
      let sumOfMinutes = 0;

      // calculate average day activity
      data.forEach(el => {
        let currentDay = moment(el.timestamp).format('ddd');
        let index = data.indexOf(el);
        let nextDay;

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
