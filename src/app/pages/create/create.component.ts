import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Article, ArticleCategory } from '../../article';
import { RouterModule } from '@angular/router';
import { ArticleService } from '../../service/article.service';
import { ToastComponent } from '../../components/toast/toast.component';
import { ImageService } from '../../service/image.service';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ToastComponent],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  public selectedFile!: File;
  public previewUrl: string | null = null;
  public loading: boolean = false;
  public error: string | null = null;
  public showToast: boolean = false;
  public article: Article = {
    id: null,
    title: '',
    content: '',
    createdAt: null,
    imgUrl: null,
    author: null,
    likes: 0,
    visited: 0,
    category: 'Articles',
  };
  categories: ArticleCategory[] = [
    'College',
    'Lycée',
    'Articles',
    'Visite',
    'Penssionat',
    'Village',
    'unima',
  ];

  constructor(private articleService: ArticleService, private imageService: ImageService, private sessionService: SessionService) {}

  onSubmit(): void {
    if (!this.article.title || !this.article.content || !this.article.author) {
      this.error = 'Veuillez remplir tous les champs requis.';
      return;
    }
    if (!this.article.imgUrl) {
      this.error = 'Veuillez importer une image.';
      return;
    }
    this.error = null;
    this.loading = true;
    this.article.createdAt = new Date();
    this.articleService.addArticle(this.article)
    .subscribe(
      (response: any) => {
        if (response && response.success) {
          console.log('Article successfully created:', response);
          let allArticles = this.sessionService.getArticles();
          allArticles.push(this.article);
          this.sessionService.storeArticles(allArticles);
          this.article = {
            id: null,
            title: '',
            content: '',
            createdAt: null,
            imgUrl: null,
            author: null,
            likes: 0,
            visited: 0,
            category: 'Articles',
          };
          this.previewUrl = null;
          this.loading = false;
          this.showToast = true;
          setTimeout(() => {
            this.showToast = false;
          }, 4000);
        } else {
          console.error('Unexpected response format:', response);
          this.error = 'Une erreur est survenue lors de la création de l\'article.';
          this.loading = false;
        }
      },
      (error) => {
        console.error('Error creating article:', error);
        this.error = 'Une erreur est survenue lors de la création de l\'article.';
        this.loading = false;
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.loading = true;
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
        this.imageService.uploadImage(this.previewUrl).subscribe(
          (response: any) => {
            if (response && response.success) {
              this.article.imgUrl = response.data.filename;
              this.loading = false;
            } else {
              console.error('Unexpected response format:', response);
              this.error = 'Une erreur est survenue lors de l\'upload de l\'image.';
              this.loading = false;
              this.article.imgUrl = null;
              this.previewUrl = null;
            }
          },
          (error) => {
            console.error('Error uploading image:', error);
            this.loading = false;
            this.previewUrl = null;
            this.error = 'Une erreur est survenue lors de l\'upload de l\'image.';
            this.article.imgUrl = null;
          }
        );
      };
      reader.readAsDataURL(file);
      
    }
  }
}
