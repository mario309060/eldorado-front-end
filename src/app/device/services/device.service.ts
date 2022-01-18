import { Injectable } from '@angular/core';
//import { Device } from '../models/device.model';
import { Device } from '../models/device.model';
//import { HttpClient, HttpHeaders  } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() {
    //private http: HttpClient
  }

  private url = `${environment.url_eldorado}`;
  // const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);

  //httpOptions = {
  //   headers: new HttpHeaders({
  //    'Content-Type': 'application/json'
  //   })
  //}  

  devices: Device[] = [];

  ngOnInit() {
    this.devices = this.lista;
    console.log(this.devices);
  }

  // Category list
  getDeviceList(): Device[] {
    return this.devices;
  }

  // Create Device
  //createDevice(device: Device): Observable<Device> {
  //  return this.http
  // .post<Device>(this.url + '/devices', 
  ////  JSON.stringify(device), this.httpOptions) 
  //  .pipe(
  //    tap(data => { JSON.stringify( data )
  ////    }
  //  ));
  //}   

  /*
  getDeviceList():  Observable<Device[]> {
    return this.http.get<Device[]>(`${this.url}/devices`)
    .pipe(
      tap(data => { JSON.stringify( data )
      }
    ));
  }
*/
  // return this.http.get(`${this.url}/devices`, { headers: this.header() });

  /* */


  // Delete device
  //deleteDevice(id){
  //  return this.http
  //  .delete<Device>(this.apiURL + '/devices/' + id, this.httpOptions)
  //  .pipe(
  //    tap(data => { JSON.stringify( data )
  //catchError(this.handleError)
  //  )
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
