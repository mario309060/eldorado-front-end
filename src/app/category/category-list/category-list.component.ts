import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.itens; //this.getCategoryList();
    console.log("categorias lista");
    console.log(this.categories);
  }

  getCategoryList(): Category[] {
    return this.categoryService.getCategoryList();
  }

  // Delete employee
  deleteCategory(category: Category) {
    if (window.confirm('Are you sure, you want to delete?')) {
      //this.restApi.deleteEmployee(id).subscribe(data => {
      //  this.categories = this.getCategoryList;
      //})

      console.log(category.id)
    }
  }

  public itens = [
    {
      'id': 1,
      'name': 'Categoria 1'
    },
    {
      'id': 2,
      'name': 'Categoria 2'
    },
    {
      'id': 3,
      'name': 'Categoria 3'
    },
  ];


}
