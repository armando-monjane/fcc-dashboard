import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { Product } from 'src/app/shared/types/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Array<Product>;

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListProducts().then((event) => {
      this.products = event.items;
    });
  }

}
