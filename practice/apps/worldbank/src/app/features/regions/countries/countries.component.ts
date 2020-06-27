import { Component, OnInit } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import { RegionState, regionFeatureKey } from '../store/region/region.reducer';
import { selectRegionState } from '../store/region/region.selectors'
import * as ExchangeRateActions from '../store/region/region.actions';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'p-worldbank-regions',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  // public regions$ = this.store.select(selectRegionState, 'regions');
  public countries$ = this.store.select(state => state[regionFeatureKey].countries)
  public region$;

  constructor(
    private store: Store<RegionState>,
    private state: State<RegionState>,
    private route: ActivatedRoute
  ) {
    route.url.subscribe( url => {
      const code = url[0].path;
      this.store.dispatch(ExchangeRateActions.loadCountries({ code }));
      const stateValue = state.getValue().region;
      this.region$ = stateValue.regions.find(e => e.code === code)
      console.log(this.region$)
    });
   }

  countrySelectedHandler() {

  }

  ngOnInit(): void {
    const code = this.route.snapshot.params.code
  }

}
