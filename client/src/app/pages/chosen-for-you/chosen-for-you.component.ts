import { Component, OnInit } from '@angular/core';
import { BeautyProduct } from './../../shared/interfaces/BeautyProduct.interface';
import { ProductsService } from './../../shared/services/products.service';
import { getChosenProducts } from './../../../../../server/src/controllers/users.controller';

@Component({
  selector: 'app-chosen-for-you',
  templateUrl: './chosen-for-you.component.html',
  styleUrls: ['./chosen-for-you.component.scss']
})
export class ChosenForYouComponent implements OnInit {

  chosenProducts: BeautyProduct[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getChosenProducts();
  }

  getChosenProducts() {
    this.productsService.getChosenProducts()
    .subscribe(products => {
      this.chosenProducts = products as Array<BeautyProduct> ;
    })
  }
}
