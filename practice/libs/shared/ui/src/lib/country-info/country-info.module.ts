import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryInfoComponent } from './country-info.component';
import { MapModule } from '../map/map.module';



@NgModule({
  declarations: [CountryInfoComponent],
  imports: [
    CommonModule,
    MapModule
  ],
  exports: [CountryInfoComponent]
})
export class CountryInfoModule { }
