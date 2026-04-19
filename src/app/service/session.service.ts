import { Injectable } from '@angular/core';
import { Article } from '../article';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  storeArticles(articles: Article[]): void {
    sessionStorage.setItem('articles', JSON.stringify(articles));
  }

  getArticles(): Article[] {
    const articlesJson = sessionStorage.getItem('articles');
    return articlesJson ? JSON.parse(articlesJson) : [];
  }

  getArticleByCategory(category: string): Article[] {
    const articles = this.getArticles();
    console.log(category, articles);
    
    return articles.filter(article => article.category === category);
  }

  getArticleMostViewed(): Article | null {
    const articles = this.getArticles();
    if (articles.length === 0) {
      return null;
    }
    return articles.reduce((mostViewed, current) => {
      return current.visited > mostViewed.visited ? current : mostViewed;
    });
  }

  getLastArticle(): Article | null {
    const articles = this.getArticles();
    if (articles.length === 0) {
      return null;
    }
    return articles.reduce((latest, current) => {
      const latestDate = new Date(latest.createdAt as Date);
      const currentDate = new Date(current.createdAt as Date);
      return currentDate > latestDate ? current : latest;
    });
  }

  setUser(name: string): void {
    localStorage.setItem('user', name);
  }

  getUser(): string | null {
    return localStorage.getItem('user');
  }

  clearSession(): void {
    sessionStorage.clear();
    localStorage.clear();
  }
}
