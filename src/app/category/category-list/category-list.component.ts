import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoryModule } from '../category.module';
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
