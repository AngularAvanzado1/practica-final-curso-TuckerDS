import { createAction, props } from '@ngrx/store';
import { Region } from '@practice/domain';

export const loadRegions = createAction(
  '[Region] Load Regions'
);

export const loadRegionsSuccess = createAction(
  '[Region] Load Regions Success',
  props<{ data: Region[] }>()
);

export const loadRegionsFailure = createAction(
  '[Region] Load Regions Failure',
  props<{ error: any }>()
);
