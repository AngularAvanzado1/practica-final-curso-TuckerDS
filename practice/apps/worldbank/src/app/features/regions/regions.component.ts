import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegionState } from './store/region/region.reducer';
import { selectRegionState } from './store/region/region.selectors'
import * as ExchangeRateActions from './store/region/region.actions';


@Component({
  selector: 'p-worldbank-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  public regions$ = this.store.select(selectRegionState, 'rates');

  constructor(private store: Store<RegionState>) { }

  ngOnInit(): void {
    this.store.dispatch(ExchangeRateActions.loadRegions());
  }

}
