import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-day',
  templateUrl: './current-day.component.html',
  styleUrls: ['./current-day.component.scss']
})
export class CurrentDayComponent implements OnInit, AfterContentInit {

  timestamp: string = '';

  constructor(
    private dataService: DataService,
    private activatedRouter: ActivatedRoute
  ) { }
  
  ngAfterContentInit() {
    this.timestamp = this.activatedRouter.snapshot.paramMap.get('timestamp');
  }

  ngOnInit() {
    this.dataService.currentDay.subscribe(nextDay => this.timestamp = nextDay);
  }

}
