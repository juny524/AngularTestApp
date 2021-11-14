import {Component} from '@angular/core';
import * as ons from 'onsenui';

import {TestlistComponent} from './testlist/testlist.component';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [ require('./app.css') ]
})
export class MyApp {

  private testedit = "test sss";
  testlist = TestlistComponent;

  constructor() {}

  alert() {
    ons.notification.alert('This is an Onsen UI alert notification.');
  }
}
