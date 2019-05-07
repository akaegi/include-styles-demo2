import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IncludeStyles } from '@codebakery/origami/styles';

@IncludeStyles('lumo-color', 'lumo-typography')
@Component({
    selector: 'same-pagenotfound',
    templateUrl: './pagenotfound.component.html',
    styleUrls: ['./pagenotfound.component.css']
})
export class PageNotFoundComponent {
  constructor(router: Router) {
    this.currentRoute = router.url;
  }

  currentRoute: string;
}
