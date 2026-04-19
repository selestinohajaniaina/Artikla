import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from '../toast/toast.component';
import { SessionService } from '../../service/session.service';
import { ArticleService } from '../../service/article.service';
import { Commentaire } from '../../article';
import { ActivatedRoute } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [FormsModule, ToastComponent, PopupComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  @Input() commentaires!: Commentaire[];
  private articleId!: number;
  public avatarBackground!: string;
  public avatarBorder!: string;
  public myAvatarBackground!: string;
  public myAvatarBorder!: string;
  public commentText: string = '';
  public isFocused: boolean = false;
  public maxLength: number = 500;
  public user!: string;
  public showToast: boolean = false;
  public message!: string;
  public showPopup: boolean = false;
  public loading: boolean = false;
  public commentaire: Commentaire = {
    id: null,
    articleId: null,
    content: '',
    author: null,
    createdAt: null,
  };

  constructor(
    private sessionService: SessionService,
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    this.articleId = Number(this.route.snapshot.paramMap.get('articleId'));
    this.user =
      sessionService.getUser() ||
      `Utilisateur anonyme ${Math.floor(Math.random() * 500)}`;
    sessionService.setUser(this.user);
  }

  ngOnInit(): void {
    const { background, border } = this.getRandomBackgroundColor();
    this.avatarBackground = background;
    this.avatarBorder = border;
    const myRBC = this.getRandomBackgroundColor();
    this.myAvatarBackground = myRBC.background;
    this.myAvatarBorder = myRBC.border;
    console.log(this.commentaires);
  }

  getRandomBackgroundColor(): { background: string; border: string } {
    const colors: [`#${string}`, `#${string}`, `#${string}`][] = [
      ['#f9c6d0', '#f48fb1', '#e91e8c'],
      ['#80deea', '#26c6da', '#00acc1'],
      ['#ffcc80', '#ffa726', '#ef6c00'],
      ['#a5d6a7', '#66bb6a', '#2e7d32'],
      ['#f48fb1', '#e91e8c', '#880e4f'],
      ['#90caf9', '#42a5f5', '#1565c0'],
      ['#ffe0b2', '#ffb74d', '#e65100'],
      ['#7986cb', '#3f51b5', '#1a237e'],
      ['#f8bbd0', '#f48fb1', '#c2185b'],
      ['#d1c4e9', '#9575cd', '#4527a0'],
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const [c1, c2, c3] = colors[randomIndex];
    return {
      background: `linear-gradient(135deg, ${c1}, ${c2})`,
      border: c3,
    };
  }

  get remaining(): number {
    return this.maxLength - this.commentText.length;
  }

  reset(): void {
    this.commentText = '';
  }

  submit(): void {
    if (!this.commentText.trim()) {
      this.showToast = true;
      this.message = 'Le commentaire ne peut pas être vide.';
      setTimeout(() => {
        this.showToast = false;
      }, 4000);
      return;
    }
    this.commentaire.articleId = this.articleId;
    this.commentaire.content = this.commentText;
    this.commentaire.author = this.user;
    this.commentaire.createdAt = new Date();
    this.loading = true;
    this.articleService.addCommentaire(this.commentaire).subscribe(
      (response) => {
        this.showToast = true;
        this.message = 'Commentaire publié avec succès !';
        this.commentaires.unshift(this.commentaire);
        setTimeout(() => {
          this.showToast = false;
        }, 4000);
        this.loading = false;
      },
      (error) => {
        this.showToast = true;
        this.message = 'Erreur lors de la publication du commentaire.';
        setTimeout(() => {
          this.showToast = false;
        }, 4000);
        this.loading = false;
      }
    );
    console.log('Commentaire publié :', this.commentText);
    this.reset();
  }

  getAvatarInitials(author: string): string {
    const names = author.split(' ');
    if (names.length === 1) {
      return (
        names[0][0].toUpperCase() +
        (names[0][1] ? names[0][1].toUpperCase() : '')
      );
    }
    return (names[0][0] + names[1][0]).toUpperCase();
  }

  getCreatedAtFormatted(createdAt: Date | null | string): string {
    const date = createdAt ? new Date(createdAt) : null;
    return date
      ? date.toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      : 'Date inconnue';
  }

  updateUsername(newUsername: any): void {
    this.user = newUsername;
    this.sessionService.setUser(newUsername);
    this.showPopup = false;
  }
}
