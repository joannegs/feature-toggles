import { Component, Input } from '@angular/core';
import { BeautyProduct } from '../../shared/interfaces/BeautyProduct.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  @Input() products!: BeautyProduct[];

  constructor() {}
}