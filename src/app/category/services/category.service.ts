import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * @name CategoryService
 * @description Class of the category service
*/
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }


  //public url = 'http://177.55.114.15:5000';

  private url = `${environment.url_eldorado}`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  ngOnInit() { }


  /**
  * @name createCategory
  * @description create a category
  */
  createCategory(category: Category): Observable<any> {
    return this.http.post<any>(`${this.url}/categories`, JSON.stringify(category))
      .pipe(
        retry(3),
        tap(response => JSON.stringify(response)),
        catchError(err => { return this.handleError(err) }
        ));
  }


  /**
   * @name getCategoryList
   * @description get the values of categories
  */
  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/categories`)
      .pipe(
        retry(3),
        tap(response => JSON.stringify(response)),
        catchError(this.handleError));
  }


  /**
   * @name deleteCategory
   * @description delete the category
  */
  deleteCategory(category: Category): Observable<any> {
    //const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(`${this.url}/categories/${category.id}`)
      .pipe(
        retry(1),
        tap(response => JSON.stringify(response)),
        catchError(err => { return this.handleError(err) }
        ));
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => new Error(errorMessage || "  Por favor, contato o responsável pelo sistema"));
  }


}
