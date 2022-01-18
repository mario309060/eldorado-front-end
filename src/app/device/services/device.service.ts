import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Device } from '../models/device.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private url = `${environment.url_eldorado}`;
  constructor() { }

  devices: Device[] = [];

  ngOnInit() {
    this.devices = this.lista;
    console.log(this.devices);
  }

  // Category list
  getDeviceList(): Device[] {
    return this.devices;
  }

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
/*
  constructor(private httpClient: HttpClient) { }
  // const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 
 
  

  // Create Device
  createDevice(device: Device): Observable<Device> {
    return this.httpClient
      .post<Device>(this.url, JSON.stringify(device), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get device data
  getDeviceList2(): Observable<Device> {
    return this.httpClient
      .get<Device>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Delete device by id
  deleteDevice(id: number) {
    return this.httpClient
      .delete<Device>(this.url + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
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
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage || "  Por favor, contato o responsável pelo sistema"));
  }

*/