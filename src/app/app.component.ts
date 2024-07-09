import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIcon,
    CreatePostModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  posts: Post[] = [];
  openCreateModal = false;

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(result => this.posts = result as Post[]);
  }

  createPost() {
    this.openCreateModal = true;
  }
}
