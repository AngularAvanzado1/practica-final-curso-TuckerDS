import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'p-ui-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {
  @Input() country;

  constructor() { }

  ngOnInit(): void {
  }

}
