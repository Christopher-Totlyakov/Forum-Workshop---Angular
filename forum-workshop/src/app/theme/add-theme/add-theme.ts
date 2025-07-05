import { Component } from '@angular/core';
import { Api } from '../../api';

@Component({
  selector: 'app-add-theme',
  imports: [],
  templateUrl: './add-theme.html',
  styleUrl: './add-theme.css'
})
export class AddTheme {
  
  constructor(private api: Api) {    
  }

  addTheme(ev: Event, themeName: string, postText: string){
    ev.preventDefault();
    this.api.createTheme(themeName, postText);
  }
}
