import { Component, Input } from '@angular/core';
import { Article } from '../../article';
import { environment } from '../../../environments/environment';
import { ArticleService } from '../../service/article.service';
import { SessionService } from '../../service/session.service';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [ToastComponent],
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent {
  @Input() article!: Article;
  public showToast: boolean = false;
  public message: string = '';
  public loading: boolean = false;

  constructor(
    private articleService: ArticleService,
    private sessionService: SessionService
  ) {}

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

  likeArticle(article: Article): void {
    this.loading = true;
    this.articleService.likeArticle(article).subscribe(
      (response: any) => {
        if (response && response.success) {
          console.log('Article liked successfully:', response);
          let allArticles = this.sessionService.getArticles();
          const index = allArticles.findIndex((a) => a.id === article.id);
          if (index !== -1) {
            allArticles[index].likes = (allArticles[index].likes || 0) + 1;
          }
          article.likes = (article.likes || 0) + 1;
          this.sessionService.storeArticles(allArticles);
        } else {
          this.showToast = true;
          this.message = "Une erreur est survenue lors de l'ajout du like.";
          console.error('Unexpected response format:', response);
          setTimeout(() => {
            this.showToast = false;
          }, 4000);
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error creating article:', error);
        this.showToast = true;
        this.message = "Une erreur est survenue lors de l'ajout du like.";
        this.loading = false;
        setTimeout(() => {
          this.showToast = false;
        }, 4000);
      }
    );
  }
}
