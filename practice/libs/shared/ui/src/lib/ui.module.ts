import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionSelectorModule } from './region-selector/region-selector.module';

@NgModule({
  imports: [
    CommonModule,
    RegionSelectorModule,
  ],
  exports: [

  ]
})
export class UiModule {}
