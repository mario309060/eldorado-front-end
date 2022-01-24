import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Device } from '../models/device.model';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  public devices: any[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  public retorno: any;

  constructor(private deviceService: DeviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDeviceList();
  }

  /**
  * @name getDeviceList
  * @description get all devices
  */
  private getDeviceList(): void {
    if (this.devices.length > 0) {
      return;
    }
    this.deviceService.getDeviceList()
      .subscribe({
        next: (data) => {
          this.devices = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      })
  }


  /**
   * @name  deleteDevice
   * @description delete a device
   */
  deleteDevice(device: Device): void {

    //if (window.confirm('Are you sure, you want to delete?')) { 
    this.deviceService.deleteCategory(device)
      .pipe(takeUntil(this.destroy$))
      .subscribe((ret: any) => {
        this.retorno = ret;
      });

    this.router.navigate(["/device/list"]);

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

  public itens = [
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
