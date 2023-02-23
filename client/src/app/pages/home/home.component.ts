import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../shared/services/products.service';
import { BeautyProduct } from './../../shared/interfaces/BeautyProduct.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService) {}

  products: BeautyProduct[] = [];

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products as Array<BeautyProduct>;
      console.log(products)
    });
  }

}
