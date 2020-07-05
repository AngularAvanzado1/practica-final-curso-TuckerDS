import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionFacadeService } from '../store/region/region.service';
import { Region, Country } from '@practice/domain';
import { Observable } from 'rxjs';


@Component({
  selector: 'p-worldbank-regions',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesComponent {
  public code;
  public countries$: Observable<Country[]>;
  public region$: Observable<Region>;

  constructor(
    private regionService: RegionFacadeService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {
    route.url.subscribe( url => {
      this.code = this.route.snapshot.params.code;
      console.log(this.code, this.route.snapshot.params)
      this.region$ = regionService.getRegionByCode$(this.code)
      this.countries$ = this.regionService.getCountries$(this.code);
    });
   }

  countrySelectedHandler(country) {
    this.router.navigate(['country', country.id]);
  }
}
