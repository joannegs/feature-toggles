import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { bagState } from 'src/app/state/bag/bag.reducer';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  loggedIn: boolean = false; 

  bag$ = this.store.select('bag');


  constructor(private store: Store<bagState>) {}

  ngOnInit(): void {}

}
