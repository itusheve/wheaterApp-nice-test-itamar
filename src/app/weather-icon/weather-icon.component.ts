import {Component, Input, OnInit} from '@angular/core';
import {TemperaturePipe} from '../temperature.pipe';


@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css'],
  providers: [TemperaturePipe]
})
export class WeatherIconComponent implements OnInit {
  @Input() set temp(tempValue: number) {

    if (tempValue) {
      const celsius = parseFloat(this.temperaturePipe.transform(tempValue, 'C'));
      this.iconName = this.getIconName(celsius);
    }
  }

  public iconName = '';

  constructor(private temperaturePipe: TemperaturePipe) {
  }

  ngOnInit(): void {
  }

  private getIconName(celsiusVal: number) {
    if (celsiusVal <= 0) {
      return 'fa-snowflake-o';
    } else if (celsiusVal >= 1 && celsiusVal <= 14) {
      return 'fa-cloud';
    } else {
      return 'fa-sun-o';
    }

  }
}
