import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return this.httpClient
      .get('http://localhost:3000/products')
      .pipe(tap((products) => {
        return products
      }));
  }

  getRecommendedProducts() {
    return this.httpClient
      .get('http://localhost:3000/chosen-products')
      .pipe(tap((products) => {
        return products
      }));
  }
}