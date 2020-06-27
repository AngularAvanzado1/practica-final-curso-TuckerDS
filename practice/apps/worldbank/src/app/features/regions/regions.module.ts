import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RegionsRoutingModule } from './regions-routing.module';
import { RegionsComponent } from './regions.component';
import { StoreModule } from '@ngrx/store';
import * as fromRegion from './store/region/region.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegionEffects } from './store/region/region.effects';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: RegionsComponent }
];

@NgModule({
  declarations: [RegionsComponent],
  imports: [
    CommonModule,
    RegionsRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromRegion.regionFeatureKey, fromRegion.reducer),
    EffectsModule.forFeature([RegionEffects])
  ]
})
export class RegionsModule { }
