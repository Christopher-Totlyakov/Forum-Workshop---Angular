import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../user/user-service';
import { WelcomeComponent } from '../shared/welcome-component/welcome-component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, WelcomeComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  constructor(private userService: UserService) {    
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

}
