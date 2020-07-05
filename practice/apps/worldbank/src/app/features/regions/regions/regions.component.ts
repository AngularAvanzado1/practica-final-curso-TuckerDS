import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { RegionFacadeService } from '../store/region/region.service';

@Component({
  selector: 'p-worldbank-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsComponent {
  public regions$ = this.route.snapshot.data.regions;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private regionService: RegionFacadeService
  ) {}

  getCode(regions){
    const child = this.route.snapshot.children[0]
    if (child && regions.length > 0) {
      return regions.find(r => r.code === child.params.code).id
    }
  }

  regionSelectedHandler(region) {
    this.router.navigate(['region', region.code]);
  }
}
