import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {path:'navigation', component: NavigationComponent},
      {path:'product-list', component: ProductListComponent},
      {path:'product-details', component: ProductDetailsComponent},
      {path:'seller-page', component: SellerPageComponent},
      {path:'register', component: RegisterComponent}
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }