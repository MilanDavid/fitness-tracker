import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  totalSteps = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data: Array<any>) => {
      data.forEach(el => {
        this.totalSteps += el.steps;
      })
    })
  }

}
