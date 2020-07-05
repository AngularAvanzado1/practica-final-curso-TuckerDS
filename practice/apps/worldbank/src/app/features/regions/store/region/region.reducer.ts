import { Action, createReducer, on } from '@ngrx/store';
import * as RegionActions from './region.actions';
import { Region, Country } from '@practice/domain';

export const regionFeatureKey = 'region';

export interface RegionState {
  regions: Region[],
  country: Country
}

export const initialState: RegionState = {
  regions: [],
  country: null
};

const regionReducer = createReducer(
  initialState,
  on(RegionActions.loadRegions, state => state),
  on(RegionActions.loadRegionsSuccess, (state, payload) => ({
    ...state,
    regions: payload.data.filter(r => r.id !== '').map(r => ({ ...r, countries: [] }))
  })),
  on(RegionActions.loadRegionsFailure, (state, payload) => (state)),

  on(RegionActions.loadCountries, state => state),
  on(RegionActions.loadCountriesSuccess, (state, payload) => ({
    ...state,
    regions: state.regions.map(r => r.code === payload.data[0].region.id ? { ...r, countries: payload.data} : r),
  })),
  on(RegionActions.loadCountriesFailure, (state, payload) => (state)),

  on(RegionActions.loadCountry, state => state),
  on(RegionActions.loadCountrySuccess, (state, payload) => ({
    ...state,
    country: payload.data
  })),
  on(RegionActions.loadCountryFailure, (state, payload) => (state)),
)

export function reducer(state: RegionState | undefined, action: Action) {
  return regionReducer(state, action)
}


