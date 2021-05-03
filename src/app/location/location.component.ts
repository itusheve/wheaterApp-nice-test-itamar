import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location = '';
  weather: any;
  curDate: Date = new Date();
  selectedSearch = 1;
  userCoords: { lat: number, lon: number } = {lat: 0, lon: 0};
  tempFormat = 'C';

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

  async getWeather() {
    if (this.selectedSearch === 1) {
      const coords = await this.getLocation();
      if (!coords) {
        alert('No support for geolocation');
        return;
      }
      this.userCoords = coords;
      this.weatherService.getForecastByUserCoordinates(this.userCoords).subscribe((weatherData: any) => {
        this.curDate = new Date();
        this.weather = weatherData;
      });
    } else {
      this.weatherService.getForecastByLocationName(this.location).subscribe((weatherData: any) => {
        this.curDate = new Date();
        this.weather = weatherData;
      });
    }

  }


  onLocationChanged(location: string) {
    this.location = location;
  }

  async getLocation(): Promise<{ lon: number, lat: number } | null> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve({lon: position.coords.longitude, lat: position.coords.latitude});
        });
      } else {
        console.log('No support for geolocation');
        resolve(null);
      }
    });
  }
}
