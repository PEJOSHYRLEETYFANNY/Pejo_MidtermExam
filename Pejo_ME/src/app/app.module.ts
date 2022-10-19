import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailsPageComponent } from './products-details-page/products-details-page.component';
import { SellerPageComponent } from './seller-page/seller-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    ProductsListComponent,
    ProductsDetailsPageComponent,
    SellerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
