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
  selected: string = "";
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

    console.log("vai gravar");
    //this.message = "";
    this.validarCampos(this.device.colorname, 'Color name');
    this.validarCampos(this.device.partnumber, 'Part number');
    this.validarCampos(this.device.categoryid, 'Category');
    console.log("passou na validacao");

    if (f.form.valid) {

      this.device.colorname = f.value.colorname;
      this.device.partnumber = f.value.partnumber;
      this.device.categoryid = f.value.categoryid;

      //this.device.colorname
      //this.device.partnumber
      //this.device.categoryid
      const devideDados = {
        "ïd": "",
        "colorname": f.value.colorname,
        "partnumber": Number(f.value.partnumber),
        "categoryid": Number(f.value.categoryid)
      }

      console.log(f.value.colorname)
      console.log(Number(f.value.partnumber));
      console.log(Number(f.value.categoryid));

      this.deviceService.createDevice(devideDados)
        //.pipe(takeUntil(this.destroy$))
        .subscribe((ret: any) => {
          this.retorno = ret;
          console.log(this.retorno);
        });
      console.log("this.retorno");
      this.router.navigate(["/device/list"]);

    }

  }


  updateObj() {
    console.log(this.device);

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
      'id': 3,
      'name': 'Categoria 1'
    },
    {
      'id': 5,
      'name': 'Categoria 2'
    },
    {
      'id': 6,
      'name': 'Categoria 3'
    },
  ];


  functionname(value: any) {
    console.log(value);
  }




}
