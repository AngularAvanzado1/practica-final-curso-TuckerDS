import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MapModule, MapComponent } from '@practice/ui';
import 'zone.js';

@NgModule({
  imports: [BrowserModule, MapModule],
  entryComponents: [MapComponent],
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const el = createCustomElement(MapComponent, {
      injector: this.injector
    });
    customElements.define('external-map', el);
  }
}
