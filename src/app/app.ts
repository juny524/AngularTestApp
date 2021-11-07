import {Component} from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [ require('./app.css') ]
})
export class MyApp {

  private testedit = "test";

  constructor() {}

  alert() {
    ons.notification.alert('This is an Onsen UI alert notification.');
  }
}
