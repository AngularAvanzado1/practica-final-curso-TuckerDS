import { Injectable } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { RegionState, regionFeatureKey } from './region.reducer';
import * as RegionActions from './region.actions';
import { of, EMPTY, Observable } from 'rxjs';
import { Country } from '@practice/domain';


@Injectable({ providedIn: 'root' })
export class RegionFacadeService {
  constructor(
    private store: Store<RegionState>,
    private state: State<RegionState>,
  ) { }

  public loadRegions() {
    this.store.dispatch(RegionActions.loadRegions());
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
    const region = this.state.getValue().region.regions.find(r => r.code === code);
    if (!region || (region && region.countries.length ===0) ) {
      console.log(region)
      this.store.dispatch(RegionActions.loadCountries({ code }));
    }
  }

  public getCountries$(code):Observable<any> {
    this.loadCountries(code);
    return this.store.select(state => {
      const region = state[regionFeatureKey].regions.find(r => r.code === code)
      return region ? [...region.countries] : []
    })
  }

  public getCountryById$(id) {
    this.loadCountry(id);
    return this.store.select(state => state[regionFeatureKey].country);
  }

  public loadCountry(code) {
    this.store.dispatch(RegionActions.loadCountry({ code }));
  }
}
