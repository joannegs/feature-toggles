import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MyLikesComponent } from './pages/my-likes/my-likes.component';
import { ChosenForYouComponent } from './pages/chosen-for-you/chosen-for-you.component';

const routes: Routes = [
  { path: '', component: ChosenForYouComponent },
  { path: 'products', component: ProductsListComponent}, 
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
