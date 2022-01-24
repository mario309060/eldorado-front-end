import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Category, Device } from '../models/device.model';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {

  @ViewChild(NgForm) fmDevice!: NgForm;
  public device: Device = {};
  public retorno: any;
  message: string = "";
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private deviceService: DeviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.device = new Device();
  }

  /**
   * @name saveDevice
   * @description save a device
  */
  saveDevice(f: NgForm) {

    //this.message = "";
    this.validarCampos(f.value.name, 'Name');

    if (f.form.valid) {

      this.device.colorname = f.value.colorname;

      this.deviceService.createDevice(this.device)
        .pipe(takeUntil(this.destroy$))
        .subscribe((ret: any) => {
          this.retorno = ret;
        });

      this.router.navigate(["/device/list"]);

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



  public categories = [
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


  functionname(value: any) {
    console.log(value);
  }




}
