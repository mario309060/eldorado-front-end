import { Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryCreateComponent } from './category-create/category-create.component';

export const CategoryRoutes: Routes = [
    {
        path: 'category',
        redirectTo: 'category/list'
    },
    {
        path: 'category/list',
        component: CategoryListComponent
    },
    {
        path: 'category/create',
        component: CategoryCreateComponent
    },
];