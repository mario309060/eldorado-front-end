import { Routes } from '@angular/router';
import { DeviceListComponent } from './components/device-list.component';
import { DeviceCreateComponent } from './device-create/device-create.component';

export const DeviceRoutes: Routes = [
    {
        path: 'device',
        redirectTo: 'device/list'
    },
    {
        path: 'device/list',
        component: DeviceListComponent
    },
    {
        path: 'device/create',
        component: DeviceCreateComponent
    },
];

