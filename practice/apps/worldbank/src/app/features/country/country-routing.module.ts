import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './country.component';

const routes: Routes = [

  {
    path: ':code',
    component: CountryComponent,
  },
  {
    path: '',
    redirectTo: '/region',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
