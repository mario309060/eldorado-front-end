import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeviceService } from './services/device.service';
import { DeviceListComponent } from './components/device-list.component';
import { DeviceCreateComponent } from './device-create/device-create.component';

@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    DeviceService
  ]
})
export class DeviceModule { }
