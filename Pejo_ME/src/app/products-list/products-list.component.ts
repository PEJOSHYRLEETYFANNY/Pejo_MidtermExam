import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Products } from '../products-list';


@Component({
  selector: 'app-products-listcomponent',
  templateUrl: './products-list. component.html',
  styleUrls: ['./products-listcomponent.css']
})
export class ProductsListComponent implements OnInit {
@Input() PRODUCTS?: ProductsListComponent; 

  constructor(private route: ActivatedRoute) { }
  @Input() listProducts: ProductsListComponent[] = [];

  selectedProducts?: ProductsListComponent;
  onSelect(products: ProductsListComponent): void{
    this.selectedProducts = products;
  }

  ngOnInit(): void {
  }

}
