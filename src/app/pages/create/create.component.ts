import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Article, ArticleCategory } from '../../article';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  public selectedFile!: File;
  public previewUrl: string | null = null;

  categories: ArticleCategory[] = [
    'College',
    'Lycée',
    'Articles',
    'Visite',
    'Penssionat',
    'Village',
    'unima',
  ];

  article: Article = {
    id: null,
    title: '',
    content: '',
    createdAt: null,
    imgUrl: null,
    author: null,
    note: 3,
    views: 0,
    category: 'Articles',
  };

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    this.article.createdAt = new Date();
    console.log('New article created:', this.article);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
