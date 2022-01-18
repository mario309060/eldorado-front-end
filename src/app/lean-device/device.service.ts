import { Injectable } from '@angular/core';
import { Device } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getDeviceList() {
    return null;
    //return this.http.get<Device[]>(`${this.url}/devices`);
  }

  /*
  listAll(): Device[] {
    const devices = {};
    return [];
  }


  getProducts() {
    return this.http.get<Product[]>(`${this.url}/products`);
}

authenticate(data) {
    return this.http.post(`${this.url}/accounts/authenticate`, data);
}

refreshToken() {
    return this.http.post(
        `${this.url}/accounts/refresh-token`,
        null,
        { headers: this.composeHeaders() }
    );
}

create(data) {
    return this.http.post(`${this.url}/accounts`, data);
}

resetPassword(data) {
    return this.http.post(`${this.url}/accounts/reset-password`, data);
}

getProfile() {
    return this.http.get(`${this.url}/accounts`, { headers: this.composeHeaders() });
}

updateProfile(data) {
    return this.http.put(`${this.url}/accounts`, data, { headers: this.composeHeaders() });
}
  */
}
