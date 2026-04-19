import { Component } from '@angular/core';
import { Article } from '../../article';
import { LitleArticleCardComponent } from '../../components/litle-article-card/litle-article-card.component';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [LitleArticleCardComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  public articles!: Article[];
  public category!: string;

  constructor(private route: ActivatedRoute, private sessionService: SessionService) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('categoryType') as string;
    this.articles = this.sessionService.getArticleByCategory(this.category);
  }

}
