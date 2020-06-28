import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryInfoModule } from '@practice/ui';

const routes: Routes = [
  { path: '', component: CountryComponent }
];

@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    CountryInfoModule,
    RouterModule.forChild(routes)
  ]
})
export class CountryModule { }