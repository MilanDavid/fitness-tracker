import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
  week: string[] = [];
  daysSet = new Set([]);

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    // getting data via service
    this.dataService.getData().subscribe((data: Array<any>) => {

      // getting only unique dates
      data.forEach(el => {
        if (!this.daysSet.has(moment(el.timestamp).format('ddd'))) {
          this.daysSet.add(moment(el.timestamp).format('ddd'));
          this.week.push(el);
        }
      });
    })
  }

}
