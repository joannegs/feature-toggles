import { Component } from '@angular/core';
import { BeautyProduct } from '../../shared/interfaces/BeautyProduct.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  products: BeautyProduct[] = PRODUCTS;
  constructor() {}

}

const PRODUCTS: BeautyProduct[] = [
  {
    name: "Duo-tone Foundation",
    description: "sher skin maker",
    shades: '50 shades',
    price: 30,
    imagePath: '../../../assets/images/foundation.svg'
  },
  {
    name: "Matte Foundation",
    description: "flexible coverage",
    shades: '45 shades',
    price: 35,
    imagePath: '../../../assets/images/matte-foundation.svg'
  },
  {
    name: "Generation Z",
    description: "breakout eraser",
    shades: '24 shades',
    price: 22,
    imagePath: '../../../assets/images/lipstick.svg'
  },
  {
    name: "Cream blush & Highlight Duo",
    description: "film for mascara",
    shades: '15 shades',
    price: 15,
    imagePath: '../../../assets/images/blush.svg'
  },
]
