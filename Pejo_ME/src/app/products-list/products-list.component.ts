import { Component, OnInit } from '@angular/core';
import {Books} from '../books'
import {BOOKS} from '../samp-books'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  books = BOOKS;
  title="Product Info"
  botitle="Details"
  selectedBooks?: Books;
  onSelect(books: Books): void{
    this.selectedBooks = books;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
