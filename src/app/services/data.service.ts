import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // http call for getting data from api
  getData() {
    return this.http.get('https://api.myjson.com/bins/1gwnal')
  }

}
