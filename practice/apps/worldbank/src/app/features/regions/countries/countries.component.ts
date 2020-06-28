import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionFacadeService } from '../store/region/region.service';
import { Region } from '@practice/domain';
import { Observable } from 'rxjs';



@Component({
  selector: 'p-worldbank-regions',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesComponent implements OnInit {
  public code;
  public countries$ = this.regionService.getCountries$(this.code);
  public region$: Observable<Region>;

  constructor(
    private regionService: RegionFacadeService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {
    route.url.subscribe( url => {
      this.code = url[0].path;
      this.region$ = regionService.getRegionsByCode$(this.code)
      this.regionService.loadCountries(this.code)
      console.log(this.region$)
    });
   }

  countrySelectedHandler(country) {
    console.log('Country', country)
    this.router.navigate(['country', country.id]);
  }

  ngOnInit(): void {
    this.code = this.route.snapshot.params.code
  }

}
