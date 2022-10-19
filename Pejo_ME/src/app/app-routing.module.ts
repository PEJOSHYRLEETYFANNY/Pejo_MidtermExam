import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaviComponent } from './navi/navi.component';
import { ProductsDetailsPageComponent } from './products-details-page/products-details-page.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {path: 'app-navi', component: NaviComponent},
      {path: 'products-details-page', component: ProductsDetailsPageComponent},
      {path: 'products-list', component: ProductsListComponent},
      {path: 'seller-page', component: SellerPageComponent},
    ]
  )],
  
  exports: [RouterModule]

})
export class AppRoutingModule { }
