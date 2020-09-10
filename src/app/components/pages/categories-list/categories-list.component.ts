import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../API.service'
import { Category } from '../../../shared/types/category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  topCategories: Array<Category>;
  categories: Array<Category>;
  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListCategorys().then(event => {
      this.categories = event.items;
    });
  }
}
