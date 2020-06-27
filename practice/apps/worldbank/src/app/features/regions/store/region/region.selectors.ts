import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegion from './region.reducer';

export const selectRegionState = createFeatureSelector<fromRegion.RegionState>(
  fromRegion.regionFeatureKey
);
