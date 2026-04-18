import { Component } from '@angular/core';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { Article } from '../../article';
import { LitleArticleCardComponent } from '../../components/litle-article-card/litle-article-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ArticleCardComponent, LitleArticleCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public topArticle: Article = {
    id: 1,
    title: 'Representation de metier avec le pilote aerien.',
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    createdAt: new Date(),
    imgUrl: 'met.jpg',
    author: 'John Doe',
    note: 5,
    views: 1240,
    category: 'Articles'
  };

  public articles: Article[] = [
    {
      id: 1,
      title: 'Article 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      createdAt: new Date(),
      imgUrl: 'https://via.placeholder.com/150',
      author: 'John Doe',
      note: 5,
      views: 320,
      category: 'College'
    }
  ];


  constructor() {}

  
}
