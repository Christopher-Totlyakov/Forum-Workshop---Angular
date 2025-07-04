import { Injectable } from '@angular/core';
import { UserAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: UserAuth | undefined;
  
  get isLoggedIn(): boolean {
    return !!this.user; 
  }
  
  constructor() {
    try {
      const userData = localStorage.getItem('user');
      
      if (userData) {
        this.user = JSON.parse(userData);
      }
    } catch (error) {
      this.user = undefined;
    }

  }

  login() {
    this.user = {
      firstname: 'John',
      email: '123@gmail.com',
      phonenumber: '1234567890'
    };
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('user');
  }
}
