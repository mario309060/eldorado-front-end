import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  Salvar(f: NgForm) {
    return true;
  }

  validarCampos(valor: any, campo: string) {

    if (!valor) {
      alert('Favor preencher o campo ' + campo);
      return false;
    }

    return true;
  }

}
