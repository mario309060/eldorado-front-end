import { Routes } from '@angular/router';
import { DeviceListComponent } from './components/device-list.component';

export const DeviceRoutes: Routes = [
    {
        path: 'device',
        redirectTo: 'device/list'
    },
    {
        path: 'device/list',
        component: DeviceListComponent
    },
];