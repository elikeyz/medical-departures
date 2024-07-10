import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../app.component';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-create-post-modal',
  standalone: true,
  imports: [ModalComponent, FormsModule],
  templateUrl: './create-post-modal.component.html',
  styleUrl: './create-post-modal.component.scss'
})
export class CreatePostModalComponent {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  open = input(false);
  onClose = output();
  onCreate = output<Post>();

  submitting = false;

  title = '';
  body = '';

  closeModal() {
    this.onClose.emit();
  }

  createPost() {
    if (!this.title.trim()) {
      this.toastr.error('You must enter a valid title');
      return;
    }

    if (!this.body.trim()) {
      this.toastr.error('You must enter a valid body');
      return;
    }

    const body = {
      id: 101,
      userId: 1,
      title: this.title.trim(),
      body: this.body.trim(),
    };

    this.submitting = true;

    this.http.post('https://jsonplaceholder.typicode.com/posts', body)
    .pipe(
      catchError(error => {
        this.toastr.error(error.message);
        return throwError(() => error);
      })
    )
    .subscribe(() => {
      this.submitting = false;
      this.toastr.success('Post created successfully!');
      this.title = '';
      this.body = '';
      this.onCreate.emit(body);
      this.closeModal();
    });
  }
}
