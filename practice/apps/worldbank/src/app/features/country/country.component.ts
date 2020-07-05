import { Component, OnInit } from '@angular/core';
import { RegionFacadeService } from '../regions/store/region/region.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Country } from '@practice/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'p-worldbank-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  public code;
  public country$: Observable<Country>;
  constructor(
    private regionService: RegionFacadeService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {
    route.url.subscribe(url => {
      this.code = url[0].path;
      this.country$ = regionService.getCountryById$(this.code)
    });
  }

  goTo(id){
    this.router.navigate(['region', id]);
  }

  ngOnInit(): void {
    this.code = this.route.snapshot.params.code
  }

}
