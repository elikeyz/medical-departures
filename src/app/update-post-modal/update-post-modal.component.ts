import { HttpClient } from '@angular/common/http';
import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../app.component';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-update-post-modal',
  standalone: true,
  imports: [ModalComponent, FormsModule],
  templateUrl: './update-post-modal.component.html',
  styleUrl: './update-post-modal.component.scss'
})
export class UpdatePostModalComponent implements OnChanges {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  open = input(false);
  post = input.required<Post | null>();
  onClose = output();
  onUpdate = output<Post>();

  submitting = false;

  title = '';
  body = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['post'].currentValue) {
      this.title = changes['post'].currentValue.title;
      this.body = changes['post'].currentValue.body;
    }
  }

  closeModal() {
    this.onClose.emit();
  }

  updatePost() {
    const body = {
      id: this.post()?.id,
      userId: this.post()?.userId,
      ...(this.title.trim() && { title: this.title.trim() }),
      ...(this.body.trim() && { body: this.body.trim() }),
    };

    this.submitting = true;

    this.http.patch(`https://jsonplaceholder.typicode.com/posts/${this.post()?.id}`, body)
      .pipe(
        catchError(error => {
          this.toastr.error(error.message);
          return throwError(() => error);
        })
      )
      .subscribe(() => {
      this.submitting = false;
      this.toastr.success('Post updated successfully!');
      this.onUpdate.emit(body as Post);
      this.closeModal();
    });
  }
}
