import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionsComponent } from './regions/regions.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  { path: '', component: RegionsComponent,
    children: [
      {
        path: ':code',
        component: CountriesComponent,
      }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionsRoutingModule { }
