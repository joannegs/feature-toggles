import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatusTagComponent } from './components/status-tag/status-tag.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { bagReducer } from './state/bag/bag.reducer';
import { FeatureToggleDirective } from './shared/directives/feature-toggle.directive';
import { AppInitService } from './shared/services/app-init.service';
import { MainLoginComponent } from './components/main-login/main-login.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './components/about/about.component';
import { FindYourShadeComponent } from './components/find-your-shade/find-your-shade.component';
import { ShadeComponent } from './pages/shade/shade.component';

export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    CardProductComponent,
    ProductsListComponent,
    MainHeaderComponent,
    NavbarComponent,
    StatusTagComponent,
    FeatureToggleDirective,
    MainLoginComponent,
    LoginComponent,
    NotFoundComponent,
    ButtonComponent,
    AboutComponent,
    FindYourShadeComponent,
    ShadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      bag: bagReducer
    })
    ],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [ AppInitService ],
      multi: true
    }],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
