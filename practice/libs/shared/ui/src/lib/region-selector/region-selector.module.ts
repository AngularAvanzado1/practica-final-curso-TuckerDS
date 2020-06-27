import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionSelectorComponent } from './region-selector.component';

@NgModule({
  declarations: [RegionSelectorComponent],
  imports: [
    CommonModule,
  ],
  exports: [RegionSelectorComponent]
})
export class RegionSelectorModule { }
