import { Component, OnInit } from '@angular/core';
import { APIService, CreateCategoryInput } from '../../../API.service'
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from '../../../shared/toastr.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(private api: APIService, private router: Router, private toastr: ToastrService ) { }

  ngOnInit(): void {
    let name = new FormControl("", Validators.required);
    let description = new FormControl();
    this.categoryForm = new FormGroup({
      name: name,
      description: description
    });
  }

  saveCategory(category: CreateCategoryInput) {
    if(this.categoryForm.valid) {
      //TODO: Implement a pre-loader
      this.api.CreateCategory(category).then(() => {
        this.toastr.success("Categoria registada com sucesso");
        this.router.navigate(['categories-list']);
      }).catch((err) => {
        this.toastr.error("Erro ao registar categoria");
        console.error(err);
      });
    }
  }
}
