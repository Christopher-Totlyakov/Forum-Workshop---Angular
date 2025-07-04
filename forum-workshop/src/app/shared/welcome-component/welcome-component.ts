import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome-component',
  imports: [RouterModule],
  templateUrl: './welcome-component.html',
  styleUrl: './welcome-component.css'
})
export class WelcomeComponent {
  @Input('isLoggedIn') isLoggedIn: boolean = false;
}
