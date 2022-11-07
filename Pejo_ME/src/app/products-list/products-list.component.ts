import { Component, Input, OnInit } from '@angular/core';
import { }
import { ActivatedRoute} from '@angular/router';
import { Book } from '../book';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
@Input() BOOK?: Book; 

  constructor(private route: ActivatedRoute) { }
  @Input() listbook: Book[] = [];

  selectedBook?: Book;
  onSelect(book: Book): void{
    this.selectedBook = book;
  }

  ngOnInit(): void {
  }

}
