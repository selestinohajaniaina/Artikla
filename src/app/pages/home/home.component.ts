import { Component } from '@angular/core';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { Article } from '../../article';
import { LitleArticleCardComponent } from '../../components/litle-article-card/litle-article-card.component';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ArticleCardComponent, LitleArticleCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public topArticle!: Article;

  public articles!: Article[];


  constructor(private sessionService: SessionService) {
    this.articles = this.sessionService.getArticles();
    this.topArticle = this.sessionService.getArticleMostViewed()!;
  }

  
}
