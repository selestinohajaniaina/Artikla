import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Article } from '../../article';

@Component({
  selector: 'app-litle-article-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './litle-article-card.component.html',
  styleUrls: ['./litle-article-card.component.css']
})
export class LitleArticleCardComponent {
  @Input() article!: Article;
  public randomPosition: 1 | 2 | 3 | 4 | 5 = (Math.floor(Math.random() * 5) + 1) as 1 | 2 | 3 | 4 | 5;

  get createdAtFormatted(): string {
    const date = this.article?.createdAt ? new Date(this.article.createdAt) : null;
    return date
      ? date.toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
      : 'Date inconnue';
  }
}
