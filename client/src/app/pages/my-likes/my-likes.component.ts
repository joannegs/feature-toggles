import { Component } from '@angular/core';
import { BeautyProduct } from './../../shared/interfaces/BeautyProduct.interface';

@Component({
  selector: 'app-my-likes',
  templateUrl: './my-likes.component.html',
  styleUrls: ['./my-likes.component.scss']
})
export class MyLikesComponent {
  userLovedProducts: BeautyProduct[] = [];
}
