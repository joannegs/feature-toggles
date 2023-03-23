import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { bagState } from 'src/app/state/bag/bag.reducer';
import { likeState } from './../../state/like/like.reducer';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  loggedIn: boolean = true; 

  bag$ = this.bagStore.select('bag');
  likes$ = this.likeStore.select('likes');

  constructor(private bagStore: Store<bagState>, private likeStore: Store<likeState>) {}

  ngOnInit(): void {}

}
