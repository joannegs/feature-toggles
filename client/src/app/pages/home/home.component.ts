import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../shared/services/products.service';
import { BeautyProduct } from './../../shared/interfaces/BeautyProduct.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/state.model';
import { DarkLaunchService } from './../../shared/services/dark-launch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService, 
    private store: Store<AppState>, private darkLaunchService: DarkLaunchService) {}

  products: BeautyProduct[] = [];

  ngOnInit() {
    console.log("home iniciada");
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products as Array<BeautyProduct>;
    });
  }

  checkUserAllowedToDarkLaunch(): boolean {
    return this.darkLaunchService.isDarkLaunched();
  }
}
