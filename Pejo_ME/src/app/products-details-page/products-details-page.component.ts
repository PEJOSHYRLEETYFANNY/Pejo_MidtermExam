import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products-details-page',
  templateUrl: './products-details-page.component.html',
  styleUrls: ['./products-details-page.component.css']
})
export class ProductsDetailsPageComponent implements OnInit {
book: any;
title: any;

  constructor() { }

  ngOnInit(): void {
  }

}
