import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  public avatarBackground!: string;
  public avatarBorder!: string;
  public commentText: string = '';
  public isFocused: boolean = false;
  public maxLength: number = 500;

  ngOnInit(): void {
    const { background, border } = this.getRandomBackgroundColor();
    this.avatarBackground = background;
    this.avatarBorder = border;
  }

  getRandomBackgroundColor(): { background: string; border: string } {
    const colors: [`#${string}`, `#${string}`, `#${string}`][] = [
      ['#f9c6d0', '#f48fb1', '#e91e8c'],
      ['#80deea', '#26c6da', '#00acc1'],
      ['#ffcc80', '#ffa726', '#ef6c00'],
      ['#a5d6a7', '#66bb6a', '#2e7d32'],
      ['#f48fb1', '#e91e8c', '#880e4f'],
      ['#90caf9', '#42a5f5', '#1565c0'],
      ['#ffe0b2', '#ffb74d', '#e65100'],
      ['#7986cb', '#3f51b5', '#1a237e'],
      ['#f8bbd0', '#f48fb1', '#c2185b'],
      ['#d1c4e9', '#9575cd', '#4527a0'],
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const [c1, c2, c3] = colors[randomIndex];
    return {
      background: `linear-gradient(135deg, ${c1}, ${c2})`,
      border: c3,
    };
  }

  get remaining(): number {
    return this.maxLength - this.commentText.length;
  }

  reset(): void {
    this.commentText = '';
  }

  submit(): void {
    if (!this.commentText.trim()) return;
    console.log('Commentaire publié :', this.commentText);
    this.reset();
  }
}
