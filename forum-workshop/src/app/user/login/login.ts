import { Component } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import { UserService } from '../user-service';

@Component({
  selector: 'app-login',
  imports: [RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private userService: UserService, private router: Router) {
  }

  login(ev: Event, email: string, password: string) {
    ev.preventDefault();
    this.userService.login();
    this.router.navigate(['/home']);

  }
}
