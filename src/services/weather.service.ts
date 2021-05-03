import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HistoryService} from './history.service';
import {first, switchMap, tap} from 'rxjs/operators';

const baseWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?`;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient, private historyService: HistoryService) {
  }

  getForecastByLocationName(locationName: string) {
    return this.http.get(`${baseWeatherUrl}q=${locationName}&appid=1b2c7cf7ec395ecdf1b4ad785ed3c181&units=metric`).pipe(
      first((res: any) => {
        this.historyService.save(res, 'location name');
        return res;
      }));
  }

  getForecastByUserCoordinates(coords: { lat: number, lon: number }) {
    return this.http.get(`${baseWeatherUrl}lat=${coords.lat}&lon=${coords.lon}&&appid=1b2c7cf7ec395ecdf1b4ad785ed3c181&units=metric`).pipe(
      first((res: any) => {
        this.historyService.save(res, 'user location');
        return res;
      }));
  }
}
