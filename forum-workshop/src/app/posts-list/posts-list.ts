import { Component, OnInit } from '@angular/core';
import { Api } from '../api';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  imports: [],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css'
})
export class PostsList implements OnInit{
 
  posts: Post[] = [];
  constructor(private api: Api) {
    
  }
  ngOnInit(): void {
    this.api.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    })
  }

}
