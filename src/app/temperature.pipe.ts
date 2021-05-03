import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, unit: string): string {

    if (value && !isNaN(value)) {

      if (unit === 'C') {
        return value.toFixed(2);
      }
      if (unit === 'F') {
        const tempareature = (value * 1.8) + 32;
        return tempareature.toFixed(2);
      }
    }
    return '';
  }

}
