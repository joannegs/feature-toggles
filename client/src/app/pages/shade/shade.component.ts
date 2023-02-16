import { Component } from '@angular/core';
import { BeautyProduct } from './../../shared/interfaces/BeautyProduct.interface';

@Component({
  selector: 'app-shade',
  templateUrl: './shade.component.html',
  styleUrls: ['./shade.component.scss']
})
export class ShadeComponent {
  recommendedProducts: BeautyProduct[] = RECOMMENDED_PRODUCTS;
}

const RECOMMENDED_PRODUCTS = [
  {
    name: "Cream bronzer",
    description: "undetectable, felxible coverage",
    shades: '45 shades',
    price: 35,
    imagePath: '../../../assets/images/foundation.svg'
  },
  {
    name: "Warm-tone eyeshadow",
    description: "beige pallete",
    shades: '45 shades',
    price: 35,
    imagePath: '../../../assets/images/matte-foundation.svg'
  },
  {
    name: "Warm-tone concealer",
    description: "breakout eraser",
    shades: '45',
    price: 35,
    imagePath: '../../../assets/images/lipstick.svg'
  },
]
