import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';

import { RegionsComponent } from './regions/regions.component';
import { CountriesComponent } from './countries/countries.component';

import { RegionState } from './store/region/region.reducer';
import { Store } from '@ngrx/store';
import * as RegionActions from './store/region/region.actions';
import { RegionFacadeService } from './store/region/region.service';
import { of } from 'rxjs';


@Injectable({providedIn: 'root'})
export class StateResolver implements Resolve<any> {
  constructor(
    private store: Store<RegionState>,
    private service: RegionFacadeService
    ) {}

  resolve(){
    this.store.dispatch(RegionActions.loadRegions());
    return of(this.service.getRegions$())
  }
}

const routes: Routes = [
  { path: '',
    component: RegionsComponent,
    resolve: { regions: StateResolver},
    children: [
      {
        path: ':code',
        component: CountriesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionsRoutingModule { }
