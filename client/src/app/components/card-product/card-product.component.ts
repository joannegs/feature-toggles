import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BeautyProduct } from 'src/app/shared/interfaces/BeautyProduct.interface';
import { addItemToBag, removeItemFromBag } from 'src/app/state/bag/bag.actions';
import { AppState } from 'src/app/state/state.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})

export class CardProductComponent {

  @Input() product!: BeautyProduct; 
  addedToBag: boolean = false;

  constructor(private store: Store<AppState>) {}

  addToBag() {
    if(!this.addedToBag) {
      this.store.dispatch(addItemToBag(this.product))
      this.addedToBag = true;
    } else this.removeFromBag();
    
  }

  removeFromBag() {
    this.store.dispatch(removeItemFromBag(this.product))
    this.addedToBag = false;
  }

}



