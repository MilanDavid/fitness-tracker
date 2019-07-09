import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private timestampSource = new BehaviorSubject<string>('');
  currentDay = this.timestampSource.asObservable();

  constructor(private http: HttpClient) { }

  // http call for getting data from api
  getData() {
    return this.http.get('https://api.myjson.com/bins/1gwnal')
  }

  changeDay(timestamp: string) {
    this.timestampSource.next(timestamp)
  }

  getTotalStepsPerDay(timestamp) {
    return this.http.get('https://api.myjson.com/bins/1gwnal').pipe(map((data: Array<any>) => {
      let sumOfSteps = 0;
      data.forEach(el => {
        if (el.timestamp == timestamp) {
          sumOfSteps += el.steps;
        }
      });
      return sumOfSteps;
    }))
  }
}
