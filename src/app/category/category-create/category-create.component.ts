import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  //@ViewChild('fmCategory', { static: true }) fmCategory: NgForm;
  @ViewChild(NgForm) fmCategory!: NgForm;
  category: Category = {};

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.category = new Category();
  }


  limpadados(f: NgForm) {

    this.category = new Category();

    f.value.name = '';

  }


  Salvar(f: NgForm) {

    this.validarCampos(f.value.name, 'Name');

    if (f.form.valid) {
      /*
            this.categoryService.create(data)
              .subscribe((response) => {
                console.log(response)
                alert('Category created!');
              },
                err => {
                  console.error(err);
                }
              );
      */

      console.log(f);

      this.limpadados(f);

      this.router.navigate(["/category"]);
    }

    return true;
  }


  validarCampos(valor: any, campo: string) {

    if (!valor) {
      alert('Favor preencher o campo ' + campo);

      return false;
    }

    return true;
  }

}
