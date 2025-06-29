import { Component, OnInit } from '@angular/core';
import { Api } from '../api';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-themes-list',
  imports: [],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css'
})
export class ThemesList implements OnInit {

  themes: Theme[] =[];
  
  constructor(private api: Api) {
  }

  ngOnInit(): void {
    console.log('test');
    this.api.getThemes().subscribe((themes) => {
      console.log(themes);
      this.themes = themes;
    })
  }
  
}
