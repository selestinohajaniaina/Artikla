import { Component, Input } from '@angular/core';
import { Article } from '../../article';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [],
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent {
  @Input() article!: Article;

  get createdAtFormatted(): string {
    const date = this.article?.createdAt
      ? new Date(this.article.createdAt)
      : null;
    return date
      ? date.toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'Unknown date';
  }

  getImageUrl(fileName: string | null): string {
    return `${environment.FILEURL}/${fileName}`;
  }
}
