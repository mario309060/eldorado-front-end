import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from './device.service';
import { DeviceComponent } from './device/device.component';


@NgModule({
  declarations: [
    DeviceComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DeviceService
  ]
})
export class LeanDeviceModule { }
