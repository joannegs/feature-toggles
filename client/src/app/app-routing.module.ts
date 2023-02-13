import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { MainLoginComponent } from './components/main-login/main-login.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [{
  path: '',
    component: LoginComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  

exports: [RouterModule]
})
export class AppRoutingModule { }
