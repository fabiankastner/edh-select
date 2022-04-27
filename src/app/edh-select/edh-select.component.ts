import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  templateUrl: './edh-select.component.html',
  styleUrls: ['./edh-select.component.scss'],
})
export class EdhSelectComponent {
  minValue: number = 0;
  maxValue: number = 10;
  options: Options = {
    floor: 0,
    ceil: 10
  };

  constructor() {}

  onChange(event: any) {
    console.log(event)
  }

}
