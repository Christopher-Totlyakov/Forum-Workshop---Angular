import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Api } from '../../api';
import { Theme } from '../../types/theme';
import { Loader } from '../../shared/loader/loader';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../../shared/welcome-component/welcome-component';
import { UserService } from '../../user/user-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-themes-list',
  imports: [Loader, CommonModule, WelcomeComponent, RouterModule],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css'
})
export class ThemesList implements OnInit {

  themes: Theme[] = [];
  isLoading: boolean = true;
  
  constructor(private api: Api, private userService: UserService, private cdr: ChangeDetectorRef) {
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  get userId(): string {
    return this.userService.user?.id || '';
  }

  isSubscribed(theme: Theme): boolean {
    return theme.subscribers.find(subscriber => subscriber === this.userId) !== undefined;
  }

  ngOnInit(): void {
    console.log('test');
    this.api.getThemes().subscribe({
      next: (themes: Theme[]) => {
        console.log(themes);
        this.themes = themes;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error fetching themes:', err);
      }
     
    })
  }
  
}
