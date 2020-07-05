import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { RegionsComponent } from './regions.component';
import { RegionSelectorModule } from '@practice/ui';
import { CountryModule } from '../../country/country.module';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import * as fromRegion from './../store/region/region.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegionEffects } from '../store/region/region.effects';
import { RegionFacadeService } from '../store/region/region.service';
import { RegionsRoutingModule} from './../regions-routing.module'
import { CountriesModule } from '../countries/countries.module';
import { Routes, Router } from '@angular/router';
import { StateResolver } from './../regions-routing.module'
import { CountriesComponent } from '../countries/countries.component';

const routes: Routes = [
  {
    path: '',
    component: RegionsComponent,
    resolve: { regions: StateResolver },
    children: [
      {
        path: ':code',
        component: CountriesComponent,
      }
    ]
  }
];

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsComponent ],
      imports: [
        RegionSelectorModule,
        CountryModule,
        CountriesModule,
        RouterTestingModule.withRoutes(routes),
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromRegion.regionFeatureKey, fromRegion.reducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([RegionEffects]),
      ],
      providers: [RegionFacadeService]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    router =TestBed.inject(Router)
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('it should load regions list before navigate to /regions', () => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.ngZone.run(() => {
      router.navigate(['/regions']);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(compiled.querySelectorAll('p-ui-region-selector li').length).toBe(7);
      })
    })
  })
});
