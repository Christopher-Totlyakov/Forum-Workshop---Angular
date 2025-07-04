import { Routes } from '@angular/router';
import { Main } from './main/main';
import { AddTheme } from './add-theme/add-theme';

export default [
    {
        path: '',
        component: Main,
        pathMatch: 'full',
    },
    {
        path: 'add-theme',
        component: AddTheme,
    },
   
] satisfies Routes;
