import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core-module';
import { SharedModule } from './shared/shared-module';
import { UserModule } from './user/user-module';
import { ThemeModule } from './theme/theme-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreModule, SharedModule, UserModule, ThemeModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'forum-workshop';
}
