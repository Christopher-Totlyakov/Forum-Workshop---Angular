import { Component, OnInit } from '@angular/core';
import { Api } from '../../api';
import { Theme } from '../../types/theme';
import { Loader } from '../../shared/loader/loader';

@Component({
  selector: 'app-themes-list',
  imports: [Loader],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css'
})
export class ThemesList implements OnInit {

  themes: Theme[] =[];
  isLoading: boolean = true;
  
  constructor(private api: Api) {
  }

  ngOnInit(): void {
    console.log('test');
    this.api.getThemes().subscribe({
      next: (themes: Theme[]) => {
        console.log(themes);
        this.themes = themes;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching themes:', err);
      }
     
    })
  }
  
}
