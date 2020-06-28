import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegionFacadeService } from '../store/region/region.service';

@Component({
  selector: 'p-worldbank-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  public regions$ = this.regionService.getRegions$();

  constructor(
    private readonly router: Router,
    private regionService: RegionFacadeService
) { }

  regionSelectedHandler(region) {
    this.router.navigate(['region', region.code]);
  }

  ngOnInit(): void {
    this.regionService.loadRegions();
  }
}
