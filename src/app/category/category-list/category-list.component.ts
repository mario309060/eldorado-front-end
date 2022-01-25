import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  public retorno: any;

  constructor(private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  //public ngOnDestroy(): void {
  //  this.getContextSubscription.unsubscribe(); 
  //}

  /**
  * @name getCategoryList
  * @description get all categories
  */
  private getCategoryList(): void {
    if (this.categories.length > 0) {
      return;
    }
    this.categoryService.getCategoryList()
      .subscribe({
        next: (data) => {
          this.categories = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }

  //let subscription = this.categoryService.getCategoryList().subscribe(
  // (ret)=>{

  //       console.log('newMagazine',ret);

  //  }); 
  /*public getContext(): void {
   this.getContextSubscription = this.workspaceContextService.getValue<Account>('account')
       .subscribe((account) => {
           this.context.account = account;
           this.getInterestRate();
       });
}*/




  /**
   * @name  deleteCategory
   * @description delete a category
   */
  deleteCategory(category: Category): void {

    //if (window.confirm('Are you sure, you want to delete?')) { 
    this.categoryService.deleteCategory(category)
      //.pipe(takeUntil(this.destroy$))
      .subscribe((ret: any) => {
        this.retorno = ret;
        console.log(this.retorno);
      });

    this.router.navigate(["/category/list"]);

    //}
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

