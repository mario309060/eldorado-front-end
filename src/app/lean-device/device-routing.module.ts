import { Routes } from '@angular/router';
import { DeviceComponent } from './device/device.component';

export const DeviceRoutes: Routes = [
    {
        path: 'devices',
        redirectTo: 'devices/listar'
    },
    {
        path: 'devices/listar',
        component: DeviceComponent
    },
];