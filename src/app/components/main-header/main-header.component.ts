import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BeautyProduct } from 'src/app/shared/interfaces/BeautyProduct.interface';
import { getBag } from 'src/app/state/bag/bag.actions';
import { bagState } from 'src/app/state/bag/bag.reducer';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  bag$ = this.store.select('bag');


  constructor(private store: Store<bagState>) {}

  ngOnInit(): void {}

}
