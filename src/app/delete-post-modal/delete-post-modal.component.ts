import { HttpClient } from '@angular/common/http';
import { Component, input, output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Post } from '../app.component';
import { catchError, throwError } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-delete-post-modal',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './delete-post-modal.component.html',
  styleUrl: './delete-post-modal.component.scss'
})
export class DeletePostModalComponent {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  open = input(false);
  post = input.required<Post | null>();
  onClose = output();
  onDelete = output<number>();

  deleting = false;

  closeModal() {
    this.onClose.emit();
  }

  deletePost() {
    this.deleting = true;

    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${this.post()?.id}`)
      .pipe(
        catchError(error => {
          this.toastr.error(error.message);
          return throwError(() => error);
        })
      )
      .subscribe(() => {
        this.deleting = false;
        this.toastr.success('Post deleted successfully!');
        this.onDelete.emit(this.post()?.id as number);
        this.closeModal();
      });
  }
}
