import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Login,
    Register,
    Profile,
  ]
})
export class UserModule { }
