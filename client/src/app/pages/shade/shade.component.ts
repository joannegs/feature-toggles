import { Component, OnInit } from '@angular/core';
import { BeautyProduct } from './../../shared/interfaces/BeautyProduct.interface';
import { ProductsService } from './../../shared/services/products.service';

@Component({
  selector: 'app-shade',
  templateUrl: './shade.component.html',
  styleUrls: ['./shade.component.scss']
})
export class ShadeComponent implements OnInit {

  recommendedProducts: BeautyProduct[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getRecommendedProducts();
  }

  getRecommendedProducts() {
    this.productsService.getChosenProducts()
      .subscribe(products => {
        this.recommendedProducts = products as Array<BeautyProduct>;
      })
  }
}

