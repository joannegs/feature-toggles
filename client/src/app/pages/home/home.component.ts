import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductsService } from './../../shared/services/products.service';
import { BeautyProduct } from './../../shared/interfaces/BeautyProduct.interface';
import { DarkLaunchService } from './../../shared/services/dark-launch.service';
import { FeatureToggleService } from './../../shared/services/feature-toggle.service';
import { FeatureToggleDirective } from './../../shared/directives/feature-toggle.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService,
    private darkLaunchService: DarkLaunchService) { }

  products: BeautyProduct[] = [];
  isUserAllowedToFindShade = false;

  ngOnInit() {
    this.getAllProducts();
    this.checkUserAllowedToDarkLaunch();
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products as Array<BeautyProduct>;
    });
  }

  private checkUserAllowedToDarkLaunch(): void {
    this.darkLaunchService.isDarkLaunched().subscribe((data) => {
      this.isUserAllowedToFindShade = data;
    });
  }
}
