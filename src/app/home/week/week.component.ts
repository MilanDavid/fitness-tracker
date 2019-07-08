import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {
  @Input('week') week: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
