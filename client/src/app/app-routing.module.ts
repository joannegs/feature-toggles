import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { FindYourShadeComponent } from './components/find-your-shade/find-your-shade.component';
import { ShadeComponent } from './pages/shade/shade.component';


const routes: Routes = [
  { path: '', component: ShadeComponent },
  { path: 'products', component: ProductsListComponent}, 
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
