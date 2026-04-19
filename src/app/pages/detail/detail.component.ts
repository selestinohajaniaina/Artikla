import { Component } from '@angular/core';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { Article, Commentaire } from '../../article';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArticleService } from '../../service/article.service';
import { ToastComponent } from '../../components/toast/toast.component';
import { CommentComponent } from '../../components/comment/comment.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ArticleCardComponent, ToastComponent, RouterModule, CommentComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  public article!: Article;
  public commentaires!: Commentaire[];
  public showToast: boolean = false;
  public message: string = '';
  public indiceMessage: string = 'Chargement de l\'article...';

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('articleId'));
    this.articleService.getArticleById(id)
    .subscribe((response: any) => {
      if(response && response.data) {
        this.article = response.data;
        this.commentaires = this.article.Commentaires!;
        console.log(this.article, this.commentaires);
        
      } else {
        console.error('Invalid response format:', response);
        this.message = this.indiceMessage = 'Erreur survenue, actualiser la page ou revenir en arrière.';
        this.showToast = true;
        setTimeout(() => {this.showToast = false;}, 4000);
      }
    },
    (error) => {
      console.error('Error fetching article:', error);
      this.message = this.indiceMessage = 'Erreur survenue, actualiser la page ou revenir en arrière.';
      this.showToast = true;
      setTimeout(() => {this.showToast = false;}, 4000);
    }
  );
  }

}
