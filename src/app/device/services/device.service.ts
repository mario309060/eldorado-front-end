import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Device } from '../models/device.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  //public url = 'http://177.55.114.15:5000';

  private url = `${environment.url_eldorado}`;

  constructor(
    private http: HttpClient
  ) { }

  devices: Device[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  ngOnInit() { }


  /**
  * @name createDevice
  * @description create a device
  */
  createDevice(device: Device): Observable<any> {
    return this.http.post<any>(`${this.url}/devices`, JSON.stringify(device))
      .pipe(
        retry(3),
        tap(response => JSON.stringify(response)),
        catchError(err => { return this.handleError(err) }
        ));
  }


  /**
   * @name getDeviceList
   * @description get the values of devices
  */
  getDeviceList(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.url}/devices`)
      .pipe(
        retry(3),
        tap(response => JSON.stringify(response)),
        catchError(this.handleError));
  }


  /**
   * @name deleteDevice
   * @description delete the category
  */
  deleteCategory(device: Device): Observable<any> {
    //const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(`${this.url}/devices/${device.id}`)
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
  /**--- */
  // Category list
  //getDeviceList(): Device[] {
  //  return this.devices;
  //}

  public lista = [
    {
      'id': 1,
      'color': 'Color 1',
      'partNumber': '1',
      category: { 'id': 1, 'name': 'Categoria 1' },
    },
    {
      'id': 2,
      'color': 'Color 2',
      'partNumber': '2',
      category: { 'id': 2, 'name': 'Categoria 2' },
    },
    {
      'id': 3,
      'color': 'Color 3',
      'partNumber': '3',
      category: { 'id': 3, 'name': 'Categoria 3' },
    },
  ];
} 