import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DayDetailsComponent } from './day-details/day-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'day-detail/:timestamp', component: DayDetailsComponent, data: {animation: 'Day'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
