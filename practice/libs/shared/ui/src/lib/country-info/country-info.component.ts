import { Component, Input } from '@angular/core';

@Component({
  selector: 'p-ui-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent {
  @Input() country;

  constructor() { }
}
