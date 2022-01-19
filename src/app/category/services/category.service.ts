import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

//import { HttpClient, HttpHeaders  } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    //private http: HttpClient
  ) { }

  private url = `${environment.url_eldorado}`;
  // const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);

  //httpOptions = {
  //   headers: new HttpHeaders({
  //    'Content-Type': 'application/json'
  //   })
  //}  

  categories: Category[] = [];

  // Define API
  //url = 'http://localhost:3000';

  ngOnInit() {
    this.categories = this.lista;
    console.log(this.categories);
  }

  // Category list
  getCategoryList(): Category[] {
    return this.categories;
  }
  /*
    // Create Device
    createDevice(category: Category): Observable<Category> {
      return this.httpClient
        .post<Category>(this.url, JSON.stringify(category), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
  */
  // Create Category
  //createCategory(category: Category): Observable<Category> {
  //  return this.http
  // .post<Category>(this.url + '/categories', 
  ////  JSON.stringify(category), this.httpOptions) 
  //  .pipe(
  //    tap(data => { JSON.stringify( data )
  ////    }
  //  ));
  //}   

  /*
  getCategoryList():  Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/categories`)
    .pipe(
      tap(data => { JSON.stringify( data )
      }
    ));
  }
*/
  // return this.http.get(`${this.url}/categories`, { headers: this.header() });

  /* */


  // Delete category
  // HttpClient API delete() method => Delete employee
  //deleteCategory(id){
  //  return this.http
  //  .delete<Category>(this.apiURL + '/categories/' + id, this.httpOptions)
  //  .pipe(
  //    tap(data => { JSON.stringify( data )
  //catchError(this.handleError)
  //  )
  //}



  public lista = [
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

  /*
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(() => new Error(errorMessage || "  Por favor, contato o responsável pelo sistema"));
    }
  */
}
