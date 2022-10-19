import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../seller-page/book';
import { BOOK } from '../seller-page/samp-book';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
@Input() Book?: Book;

title="Book Detail"
book=BOOK;
currentBook = 'The Longest Ride'
//@input () book: book[]

  constructor() { }

  ngOnInit(): void {
  }

}
