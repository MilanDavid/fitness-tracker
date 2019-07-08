import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.scss']
})
export class CaloriesComponent implements OnInit {

  burnedCalories = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data: Array<any>) => {
      data.forEach(el => {
        this.burnedCalories += el.steps;
      })
      this.burnedCalories = Math.round(this.burnedCalories * 0.05);
    })
  }

}
