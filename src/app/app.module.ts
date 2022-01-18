import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeanDeviceModule } from './lean-device/lean-device.module';
import { CategoryModule } from './category/category.module';
import { DeviceModule } from './device/device.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LeanDeviceModule,
    CategoryModule,
    DeviceModule,
    AppRoutingModule // sempre manter por último.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
