import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../user-service';

@Component({
  selector: 'app-login',
  imports: [RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private userService: UserService) {
  }

  login(email: string, password: string) {
    this.userService.login();
    window.location.href = '/';
  }
}
