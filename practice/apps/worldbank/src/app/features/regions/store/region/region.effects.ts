import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import * as RegionActions from './region.actions';
import { environment } from '../../../../../environments/environment';



@Injectable()
export class RegionEffects {

  loadRegions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegionActions.loadRegions),
      concatMap(() =>
        this.http.get<any>(`${environment.BASE_API}/region/?format=json`).pipe(
          map(res => {
            const data = res && res[1] ? res[1] : [];
            return RegionActions.loadRegionsSuccess({ data })
          }),
          catchError(error =>
            of(RegionActions.loadRegionsFailure({ error }))
          )
        )
      )
    );
  });


  loadCountries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RegionActions.loadCountries),
      concatMap(({code}) =>
        this.http.get<any>(`${environment.BASE_API}/region/${code}/country?per_page=1000&format=json`).pipe(
          map(res => {
            const data = res && res[1] ? res[1] : [];
            return RegionActions.loadCountriesSuccess({ data })
          }),
          catchError(error =>
            of(RegionActions.loadCountriesFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}
