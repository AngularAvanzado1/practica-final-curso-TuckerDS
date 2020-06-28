import { Component, OnInit } from '@angular/core';
import { RegionFacadeService } from '../regions/store/region/region.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'p-worldbank-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  public code;
  public country$;
  constructor(
    private regionService: RegionFacadeService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {
    route.url.subscribe(url => {
      this.code = url[0].path;
      this.country$ = regionService.getCountryById$(this.code)
      // this.regionService.loadCountries(this.code)
      console.log(this.country$)
    });
  }

  ngOnInit(): void {
    this.code = this.route.snapshot.params.code
  }

}
