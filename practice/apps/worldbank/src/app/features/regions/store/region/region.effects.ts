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
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
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



  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

}
