import { Component, OnInit } from '@angular/core';
import { Api } from '../api';

@Component({
  selector: 'app-themes-list',
  imports: [],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css'
})
export class ThemesList implements OnInit {

  constructor(private api: Api) {

    
  }

  ngOnInit(): void {
    this.api.getThemes().subscribe((d) => {
      console.log(d)
    })
  }
  
}
