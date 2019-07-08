import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.scss']
})
export class CaloriesComponent implements OnInit {

  @Input('burnedCalories') burnedCalories = 0;

  constructor() { }

  ngOnInit() {
  }

}
