import { error } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  //@ViewChild('fmCategory', { static: true }) fmCategory: NgForm;
  @ViewChild(NgForm) fmCategory!: NgForm;
  category: Category = {};
  public retorno: any;
  message: string = "";
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.category = new Category();
  }

  /**
   * @name saveCategory
   * @description save a category
  */
  saveCategory(f: NgForm) {

    //this.message = "";
    this.validarCampos(f.value.name, 'Name');

    if (f.form.valid) {

      this.category.name = f.value.name;

      this.categoryService.createCategory(this.category)
        .pipe(takeUntil(this.destroy$))
        .subscribe((ret: any) => {
          this.retorno = ret;
        });

      this.router.navigate(["/category/list"]);

    }

  }


  /**
   * @name validarCampos
   * @description valid the fields
  */
  validarCampos(valor: any, campo: string) {

    if (!valor) {

      this.message = 'Favor preencher o campo ' + campo;
      return false;

    }

    return true;
  }

  /**
  * @name ngOnDestroy
  * @description clean
  */
  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
