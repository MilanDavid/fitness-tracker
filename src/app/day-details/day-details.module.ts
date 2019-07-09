import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentDayComponent } from './current-day/current-day.component';
import { CurrentDayDetailsComponent } from './current-day-details/current-day-details.component';
import { CurrentDayProgressComponent } from './current-day-progress/current-day-progress.component';
import { DayDetailsComponent } from './day-details.component';
import { DataService } from '../services/data.service';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DayDetailsComponent,
    CurrentDayComponent,
    CurrentDayDetailsComponent,
    CurrentDayProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeModule
  ],
  providers: [DataService]
})
export class DayDetailsModule { }
