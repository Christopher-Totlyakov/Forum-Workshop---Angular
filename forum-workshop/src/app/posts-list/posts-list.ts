import { Component, OnInit } from '@angular/core';
import { Api } from '../api';

@Component({
  selector: 'app-posts-list',
  imports: [],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css'
})
export class PostsList implements OnInit{
 
  constructor(private api: Api) {
    
  }
  ngOnInit(): void {
    this.api.getPosts().subscribe((d) => {
      console.log(d)
    })
  }

}
