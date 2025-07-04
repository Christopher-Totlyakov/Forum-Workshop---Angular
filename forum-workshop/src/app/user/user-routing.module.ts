import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { Routes } from '@angular/router';

export default [
    {
        path: 'login',
        component: Login,
    },
    {
        path: 'register',
        component: Register,
    },
    {
        path: 'profile',
        component: Profile,
    }
] satisfies Routes;
