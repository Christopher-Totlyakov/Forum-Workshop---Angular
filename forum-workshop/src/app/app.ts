import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core-module';
import { SharedModule } from './shared/shared-module';
import { Main } from './main/main';
import { UserModule } from './user/user-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreModule, SharedModule, Main, UserModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'forum-workshop';
}
