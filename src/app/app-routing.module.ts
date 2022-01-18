import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceRoutes } from './lean-device/device-routing.module';
import { CategoryRoutes } from './category/category-routing.module';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'category/list',
    pathMatch: 'full' //passa a url inteira
  },
  ...CategoryRoutes
  //...DeviceRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
