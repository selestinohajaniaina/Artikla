import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Article } from '../article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private URL: string = environment.SERVERURL;

  constructor(private http: HttpClient) { }

  getAllArticles() {
    return this.http.get(`${this.URL}/article`);
  }

  getArticleById(id: number) {
    return this.http.get(`${this.URL}/article/${id}`);
  }

  addArticle(article: Article) {
    return this.http.post(`${this.URL}/article`, article);
  }

}
