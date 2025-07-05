import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../user/user-service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private userService: UserService, private router: Router) {
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get userName(): string {
    return this.userService.user?.firstname || 'Guest';
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
  
}
