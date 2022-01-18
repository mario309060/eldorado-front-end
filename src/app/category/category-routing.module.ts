import { Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';

export const CategoryRoutes: Routes = [
    {
        path: 'category',
        redirectTo: 'category/list'
    },
    {
        path: 'category/list',
        component: CategoryListComponent
    },
];