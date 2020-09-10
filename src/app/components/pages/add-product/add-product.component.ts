import { Component, OnInit } from '@angular/core';
import { APIService, CreateProductInput, CreateCategoryInput } from '../../../API.service'
import { Category } from 'src/app/shared/types/category';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories: Array<Category>;
  productForm: FormGroup;

  name: FormControl;
  description: FormControl;
  thumbnail: FormControl;
  price: FormControl;
  quantity: FormControl;
  categoryID: FormControl;
  tags: FormControl;


  constructor(private api: APIService, private router: Router) { }

  ngOnInit(): void {
    this.api.ListCategorys().then(event => {
      this.categories = event.items;
    });

    this.name = new FormControl('', Validators.required);
    this.description = new FormControl();
    this.thumbnail = new FormControl();
    this.price = new FormControl('', Validators.required);
    this.quantity = new FormControl('', Validators.required);
    this.categoryID = new FormControl('', Validators.required);
    this.tags = new FormControl;

    this.productForm = new FormGroup({
      name: this.name,
      description: this.description,
      thumbnail: this.thumbnail,
      price: this.price,
      quantity: this.quantity,
      categoryID: this.categoryID,
      tags: this.tags
    });
  }


  public saveProduct(product: CreateProductInput) {
    console.log(product);
    if(this.productForm.valid) {
      this.api.CreateProduct(product).then(event => {
        console.log('Product created...');
        this.router.navigate(['products-list']);

        //TODO: show error in a frindly way
      }).catch((err) => console.error(err));
    }
  }
}
