import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DayDetailsComponent } from './day-details/day-details.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { WeekComponent } from './home/week/week.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivityComponent } from './home/activity/activity.component';
import { StepsComponent } from './home/steps/steps.component';
import { CaloriesComponent } from './home/calories/calories.component';
import { CurrentDayComponent } from './day-details/current-day/current-day.component';
import { CurrentDayDetailsComponent } from './day-details/current-day-details/current-day-details.component';
import { CurrentDayProgressComponent } from './day-details/current-day-progress/current-day-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DayDetailsComponent,
    WelcomeComponent,
    WeekComponent,
    ActivityComponent,
    StepsComponent,
    CaloriesComponent,
    CurrentDayComponent,
    CurrentDayDetailsComponent,
    CurrentDayProgressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
