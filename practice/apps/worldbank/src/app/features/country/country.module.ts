import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryInfoModule, RegionSelectorModule } from '@practice/ui';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RegionEffects } from '../regions/store/region/region.effects';
import * as fromRegion from '../regions//store/region/region.reducer';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: CountryComponent
  }
];

@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    CountryInfoModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    RegionSelectorModule,
    StoreModule.forFeature(fromRegion.regionFeatureKey, fromRegion.reducer),
    EffectsModule.forFeature([RegionEffects])
  ]
})
export class CountryModule { }
