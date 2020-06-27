import { Action, createReducer, on } from '@ngrx/store';
import * as RegionActions from './region.actions';
import { Region, Country } from '@practice/domain';

export const regionFeatureKey = 'region';

export interface RegionState {
  regions: Region[],
  countries: Country[]
}

export const initialState: RegionState = {
  regions: [],
  countries: []
};

const regionReducer = createReducer(
  initialState,
  on(RegionActions.loadRegions, state => state),
  on(RegionActions.loadRegionsSuccess, (state, payload) => ({
    ...state,
    regions: payload.data.filter(r => r.id !== '')
  })),
  on(RegionActions.loadRegionsFailure, (state, payload) => (state)),


  on(RegionActions.loadCountries, state => state),
  on(RegionActions.loadCountriesSuccess, (state, payload) => ({
    ...state,
    countries: payload.data.filter(r => r.id !== '')
  })),
  on(RegionActions.loadCountriesFailure, (state, payload) => (state)),

)


export function reducer(state: RegionState | undefined, action: Action) {
  return regionReducer(state, action)
}


