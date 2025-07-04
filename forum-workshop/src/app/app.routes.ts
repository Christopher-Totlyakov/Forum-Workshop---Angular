import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Error } from './error/error';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'user',
        loadChildren: () => import('./user/user-routing.module').then(m => m.default)
    },
    {
        path: 'themes',
        loadChildren: () => import('./theme/theme-routing.module').then(m => m.default)
    }, 
    {
        path: '404',
        component: Error,
    },
    {
        path: '**',
        redirectTo: '/404',
    },
    
];
