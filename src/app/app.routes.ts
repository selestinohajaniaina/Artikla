import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { CategoryComponent } from './pages/category/category.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'new',
        component: CreateComponent
    },
    {
        path: 'c/:categoryType',
        component: CategoryComponent
    }
];
