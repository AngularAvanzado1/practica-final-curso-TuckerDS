import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Region } from '@practice/domain';

@Component({
  selector: 'p-ui-region-selector',
  templateUrl: './region-selector.component.html',
  styleUrls: ['./region-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionSelectorComponent {
  @Input() regions: Region[];
  @Input() selectedItem: string;
  @Output() regionSelected = new EventEmitter();

  constructor() { }

  clickEventHandler(region: Region) {
    this.regionSelected.emit(region);
    this.selectedItem = region.id;
  }
}
