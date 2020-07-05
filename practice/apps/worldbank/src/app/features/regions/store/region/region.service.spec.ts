import { RegionFacadeService } from './region.service'
import { TestBed, async } from '@angular/core/testing';


import { Component, OnInit } from '@angular/core';
import { Store, StoreModule, State } from '@ngrx/store';
import { RegionState } from './region.reducer';
import * as RegionActions from './region.actions';
import { EffectsModule } from '@ngrx/effects';
import * as fromRegion from './region.reducer';
import { RegionEffects } from './region.effects';
import { HttpClientModule } from '@angular/common/http';
import { first, take, last, takeLast } from 'rxjs/operators';
import { doesNotThrow } from 'assert';


@Component({
  selector: 'p-worldbank-fake',
  template: `
    {{ regions$ | async}}
  `,
  styleUrls: [],
})
export class FakeComponent {
  regions$ = this.service.getRegions$()
  constructor(
    public store: Store<RegionState>,
    public service: RegionFacadeService
  ) {
    this.store.dispatch(RegionActions.loadRegions());
  }
}

describe('RegionFacadeService', ()=> {
  let service: RegionFacadeService;
  let store: Store<RegionState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(
          {},
          {
            metaReducers: [],
            runtimeChecks: {
              strictActionImmutability: true,
              strictStateImmutability: true,
            },
          }
        ),
        StoreModule.forFeature(fromRegion.regionFeatureKey, fromRegion.reducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([RegionEffects]),
        HttpClientModule,
        [],
      ],
      declarations: [FakeComponent],
      providers: [
        RegionFacadeService,
      ]
    }).compileComponents();

    store = TestBed.inject(Store)
    service = TestBed.inject(RegionFacadeService)
  }));


  it(`should get state form facade`, async (done)=> {
    store.dispatch(RegionActions.loadRegions());
    expect.assertions(1);
    service.getRegions$().pipe(first()).subscribe(data => {
      expect(data).toBeTruthy();
      done()
    })
  })

  it(`should get state at components`, async (done) => {
    const fixture = TestBed.createComponent(FakeComponent);
    const app = fixture.componentInstance;

    expect.assertions(1);
    app.regions$.pipe(take(1)).subscribe((data: []) => {
      expect(data.length).toBe(0);
      done()
    })
  })
})
