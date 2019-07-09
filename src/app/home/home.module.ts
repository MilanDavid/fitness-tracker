import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity/activity.component';
import { CaloriesComponent } from './calories/calories.component';
import { StepsComponent } from './steps/steps.component';
import { WeekComponent } from './week/week.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [
    HomeComponent,
    ActivityComponent,
    CaloriesComponent,
    StepsComponent,
    WeekComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [
    WeekComponent
  ],
  providers: [DataService]
})
export class HomeModule { }
