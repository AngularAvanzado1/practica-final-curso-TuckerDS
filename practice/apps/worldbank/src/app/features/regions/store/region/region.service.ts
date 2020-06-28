import { Injectable } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { RegionState, regionFeatureKey } from './region.reducer';
import * as ExchangeRateActions from './region.actions';
import { of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class RegionFacadeService {
  constructor(
    private store: Store<RegionState>,
    private state: State<RegionState>,
  ) { }


  public loadRegions() {
    this.store.dispatch(ExchangeRateActions.loadRegions());
  }

  public getRegions$() {
    // public regions$ = this.store.select(selectRegionState, 'regions');
    return this.store.select(state => state[regionFeatureKey].regions);
  }

  public getRegionByCode$(code) {
    const stateValue = this.state.getValue().region;
    return of(stateValue.regions.find(e => e.code === code));
  }

  public loadCountries(code) {
    this.store.dispatch(ExchangeRateActions.loadCountries({ code }));
  }

  public getCountries$(code) {
      // public regions$ = this.store.select(selectRegionState, 'regions');
    return this.store.select(state => state[regionFeatureKey].countries);
  }

  public getCountryById$(id) {
    const stateValue = this.state.getValue().region;
    return of(stateValue.countries.find(e => e.id === id));
  }
}
