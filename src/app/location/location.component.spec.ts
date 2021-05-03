import {ComponentFixture, TestBed, tick} from '@angular/core/testing';

import {LocationComponent} from './location.component';
import {TemperaturePipe} from '../temperature.pipe';
import {WeatherService} from '../../services/weather.service';
import {of} from 'rxjs';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

fdescribe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;
  let debugElement: DebugElement;


  beforeEach(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    await TestBed.configureTestingModule({
      declarations: [LocationComponent],
      providers: [TemperaturePipe, {
        provide: WeatherService,
        useClass: WeatherServiceMock
      }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display autocomplete when select option', () => {
    component.selectedSearch = 2;
    fixture.detectChanges();
    const autoComplete = debugElement.queryAll(By.css('#acId'));
    expect(autoComplete).toBeTruthy();
  });

  it('should get user geo location if enabled', async () => {
    const location = await component.getLocation();
    expect(location?.lon).toBeTruthy();
    expect(location?.lat).toBeTruthy();
  });

  it('should get location weather by name', async () => {
    component.selectedSearch = 2;
    component.location = 'Shuzenji';
    fixture.detectChanges();
    await component.getWeather() as any;
    expect(component.weather?.name).toEqual('Shuzenji');
  });
});

export class WeatherServiceMock {
  weatherResponse = {
    'coord': {'lon': 139, 'lat': 35},
    'weather': [
      {
        'id': 800,
        'main': 'Clear',
        'description': 'clear sky',
        'icon': '01n'
      }
    ],
    'base': 'stations',
    'main': {
      'temp': 281.52,
      'feels_like': 278.99,
      'temp_min': 280.15,
      'temp_max': 283.71,
      'pressure': 1016,
      'humidity': 93
    },
    'wind': {
      'speed': 0.47,
      'deg': 107.538
    },
    'clouds': {
      'all': 2
    },
    'dt': 1560350192,
    'sys': {
      'type': 3,
      'id': 2019346,
      'message': 0.0065,
      'country': 'JP',
      'sunrise': 1560281377,
      'sunset': 1560333478
    },
    'timezone': 32400,
    'id': 1851632,
    'name': 'Shuzenji',
    'cod': 200
  };

  getForecastByUserCoordinates() {
    return of(
      this.weatherResponse
    );
  }

  getForecastByLocationName() {
    return of(
      this.weatherResponse
    );
  }
}
