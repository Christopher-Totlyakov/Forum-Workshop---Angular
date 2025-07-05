import { Routes } from '@angular/router';
import { Main } from './main/main';
import { AddTheme } from './add-theme/add-theme';
import { CurrentTheme } from './current-theme/current-theme';
import { AuthActivate } from '../guards/auth.activate';

export default [
    {
        path: '',
        component: Main,
        pathMatch: 'full',
    },
    {
        path: 'add',
        component: AddTheme,
        canActivate: [AuthActivate],
    },
    {
        path: ':id',
        component: CurrentTheme,
    },
    
   
] satisfies Routes;
