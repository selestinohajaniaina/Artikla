import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent {
  @Input() username!: string;
  @Output() closed = new EventEmitter<boolean>();
  @Output() saved = new EventEmitter<string>();

  save(): void {
    if (this.username.trim() === '') {
      return;
    }
    this.saved.emit(this.username);
  }

  close(): void {
    this.closed.emit(true);
  }
}
