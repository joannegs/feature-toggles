import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { bagState } from 'src/app/state/bag/bag.reducer';
import { likeState } from './../../state/like/like.reducer';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  loggedIn: boolean = false; 

  bag$ = this.bagStore.select('bag');
  likes$ = this.likeStore.select('likes');

  constructor(
    private bagStore: Store<bagState>, 
    private likeStore: Store<likeState>,
    private router: Router) {}

  ngOnInit(): void {}

  isLoggedIn() {
    return !!localStorage.getItem("logged_user_id");
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(["/"]);
  }
}
