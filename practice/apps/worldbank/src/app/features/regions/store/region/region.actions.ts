import { createAction, props } from '@ngrx/store';
import { Region, Country } from '@practice/domain';

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



export const loadCountries = createAction(
  '[Region] Load Countries',
  props<{ code: string }>()
);

export const loadCountriesSuccess = createAction(
  '[Region] Load Countries Success',
  props<{ data: Country[] }>()
);

export const loadCountriesFailure = createAction(
  '[Region] Load Countries Failure',
  props<{ error: any }>()
);


export const loadCountry = createAction(
  '[Region] Load Country',
  props<{ code: string }>()
);

export const loadCountrySuccess = createAction(
  '[Region] Load Country Success',
  props<{ data: Country }>()
);

export const loadCountryFailure = createAction(
  '[Region] Load Country Failure',
  props<{ error: any }>()
);
