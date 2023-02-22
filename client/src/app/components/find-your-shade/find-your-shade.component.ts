import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-your-shade',
  templateUrl: './find-your-shade.component.html',
  styleUrls: ['./find-your-shade.component.scss']
})
export class FindYourShadeComponent {
  
  constructor(private router: Router){}

  getShadeResults() {
    this.router.navigate(['shade-results']);
  }

}
