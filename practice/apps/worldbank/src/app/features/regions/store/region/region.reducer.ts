import { Action, createReducer, on } from '@ngrx/store';
import * as RegionActions from './region.actions';
import { Region } from '@practice/domain';

export const regionFeatureKey = 'region';

export interface RegionState {
  regions: Region[]
}

export const initialState: RegionState = {
  regions: []
};

const regionReducer = createReducer(
  initialState,
  on(RegionActions.loadRegions, state => state),
  on(RegionActions.loadRegionsSuccess, (state, payload) => ({
    ...state,
    regions: payload.data.filter(r => r.id !== '')
  })),
  on(RegionActions.loadRegionsFailure, (state, payload) => (state)),
)


export function reducer(state: RegionState | undefined, action: Action) {
  return regionReducer(state, action)
}


