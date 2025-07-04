import { Component, OnInit } from '@angular/core';
import { Api } from '../../api';
import { Post } from '../../types/post';
import { Loader } from '../../shared/loader/loader';

@Component({
  selector: 'app-posts-list',
  imports: [Loader],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css'
})
export class PostsList implements OnInit{
 
  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private api: Api) {
    
  }
  ngOnInit(): void {
    this.api.getPosts().subscribe({
      next: (posts: Post[]) => {
        console.log(posts);
        this.posts = posts;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      }
     
    })
  }

}
