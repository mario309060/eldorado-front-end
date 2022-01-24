import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './category/category.module';
import { DeviceModule } from './device/device.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CategoryModule,
    DeviceModule,
    HttpClientModule,
    AppRoutingModule // sempre manter por último.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
