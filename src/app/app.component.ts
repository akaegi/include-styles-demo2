import { Component } from '@angular/core';
import { IncludeStyles } from '@codebakery/origami/styles';

// Import vaadin-lumo-styles (js files will append styles to head of DOM document)
// see https://vaadin.com/tutorials/using-web-components-in-angular
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';

import './main/same-theme';  // include lumo-color and lumo-typography in global styles

import '@vaadin/vaadin-tabs/vaadin-tabs.js';

@Component({
  selector: 'same-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
