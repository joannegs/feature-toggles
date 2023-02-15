import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent {

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/products']);
  }

}
