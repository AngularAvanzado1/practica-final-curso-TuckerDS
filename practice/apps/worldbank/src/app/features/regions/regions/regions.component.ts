import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegionState, regionFeatureKey } from '../store/region/region.reducer';
import { selectRegionState } from '../store/region/region.selectors'
import * as ExchangeRateActions from '../store/region/region.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'p-worldbank-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  // public regions$ = this.store.select(selectRegionState, 'regions');
  public regions$ =  this.store.select(state => state[regionFeatureKey].regions);

  constructor(
    private store: Store<RegionState>,
    private readonly router: Router,
) { }

  regionSelectedHandler(region) {
    console.log(region)
    this.router.navigate(['region',region.code]);
  }

  ngOnInit(): void {
    this.store.dispatch(ExchangeRateActions.loadRegions());
  }
}
