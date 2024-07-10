import { Component, input, output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  open = input(false);
  title = input('');
  onClose = output();

  closeModal() {
    this.onClose.emit();
  }
}
