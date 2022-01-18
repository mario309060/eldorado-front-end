import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryRoutes } from './category/category-routing.module';
import { DeviceRoutes } from './device/device-routing.module';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'category/list',
    pathMatch: 'full' //passa a url inteira
  },
  ...CategoryRoutes,
  ...DeviceRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
