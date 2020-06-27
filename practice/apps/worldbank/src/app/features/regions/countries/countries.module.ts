import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from '../countries/countries.component';
import { RegionSelectorModule } from '@practice/ui';

@NgModule({
  declarations: [
    CountriesComponent],
  imports: [
    CommonModule,
    RegionSelectorModule,
    HttpClientModule,
  ]
})
export class CountriesModule { }
