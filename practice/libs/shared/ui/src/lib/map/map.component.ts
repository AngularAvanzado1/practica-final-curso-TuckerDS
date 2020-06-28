import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'p-ui-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() latitude;
  @Input() longitude;

  getUrl() {
    const url = `https://maps.google.com/maps?q=${this.latitude},${this.longitude}&z=6&output=embed&iwloc=0`
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log(this.longitude, this.longitude)
  }
}
