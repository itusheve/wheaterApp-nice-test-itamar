import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() {
  }

  save(weatherObj: any, type: 'user location' | 'location name') {
    if (localStorage.getItem('history')) {
      const history = JSON.parse(localStorage.getItem('history') || '{}');
      history.push(weatherObj);
      localStorage.setItem('history', JSON.stringify(history));
    } else {
      localStorage.setItem('history', JSON.stringify([weatherObj]));
    }
  }
  getHistoryData(){
    if (localStorage.getItem('history')) {
      const history = JSON.parse(localStorage.getItem('history') || '{}');
      return history;
    } else {
      return null;
    }
  }
}
