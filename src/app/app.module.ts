import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DayDetailsComponent } from './day-details/day-details.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { WeekComponent } from './home/week/week.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivityComponent } from './home/activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DayDetailsComponent,
    WelcomeComponent,
    WeekComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
