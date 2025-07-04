import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Api } from '../../api';
import { Post } from '../../types/post';
import { Loader } from '../../shared/loader/loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts-list',
  imports: [Loader, CommonModule],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css'
})
export class PostsList implements OnInit{

  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private api: Api, private cdr: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.api.getPosts().subscribe({
      next: (posts: Post[]) => {
        console.log(posts);
        this.posts = posts;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      }

    })
  }

}
