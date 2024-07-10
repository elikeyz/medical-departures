import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';
import { UpdatePostModalComponent } from './update-post-modal/update-post-modal.component';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export interface Post {
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
    CreatePostModalComponent,
    UpdatePostModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private toastr: ToastrService) {}
  posts: Post[] = [];
  openCreateModal = false;
  openUpdateModal = false;
  selectedPost: Post | null = null;

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      catchError(error => {
        this.toastr.error(error.message);
        return throwError(error);
      })
    )
    .subscribe(result => this.posts = result as Post[]);
  }

  createPost() {
    this.openCreateModal = true;
  }

  addNewPost(post: Post) {
    this.posts = [post, ...this.posts];
  }

  updatePost(post: Post) {
    this.selectedPost = post;
    this.openUpdateModal = true;
  }

  editPost(post: Post) {
    const updatedPosts = [...this.posts];
    const postIndex = updatedPosts.findIndex(({ id }) => post.id === id);
    updatedPosts.splice(postIndex, 1, post);
    this.posts = updatedPosts;
  }
}
