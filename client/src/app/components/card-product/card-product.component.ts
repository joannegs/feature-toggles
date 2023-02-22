import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BeautyProduct } from 'src/app/shared/interfaces/BeautyProduct.interface';
import { addItemToBag, removeItemFromBag } from 'src/app/state/bag/bag.actions';
import { loveProduct } from 'src/app/state/like/like.actions';
import { AppState } from 'src/app/state/state.model';
import { removeLoveofProduct } from './../../state/like/like.actions';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})

export class CardProductComponent {

  @Input() product!: BeautyProduct; 
  addedToBag: boolean = false;
  loved: boolean = false; 

  constructor(private store: Store<AppState>) {}

  addToBag() {
    if(!this.addedToBag) {
      this.store.dispatch(addItemToBag(this.product))
      this.addedToBag = true;
    } else this.removeFromBag();
  }

  loveProduct() {
    if(!this.loved) { 
      this.store.dispatch(loveProduct(this.product))
      this.loved = true; 
    } else this.removeLoveOfProduct();
  }

  removeLoveOfProduct() {
    this.store.dispatch(removeLoveofProduct(this.product))
    this.loved = false;
  }

  removeFromBag() {
    this.store.dispatch(removeItemFromBag(this.product))
    this.addedToBag = false;
  }

}



