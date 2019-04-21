import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SettingsService } from '../_services/settings.service';

// interface Setting {
//   type: 'string' | 'number' | 'boolean';
//   name: string;
//   value: string;
// }

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Output() close = new EventEmitter(true);

  settings = [];

  constructor(public settingsService: SettingsService) {

    // tslint:disable-next-line:forin
    for (const s in settingsService.settings) {
      this.settings.push(settingsService.settings[s]);
    }

  }

  ngOnInit() {
    // console.log(this.settings);
  }

  closeSettings() {
    this.close.emit();
  }

  aa(v) {
    console.log(v);
  }

}