import { Component, input, output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-create-post-modal',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './create-post-modal.component.html',
  styleUrl: './create-post-modal.component.scss'
})
export class CreatePostModalComponent {
  open = input(false);
  onClose = output();

  closeModal() {
    this.onClose.emit();
  }
}
