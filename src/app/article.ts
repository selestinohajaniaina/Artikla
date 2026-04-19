export type ArticleCategory =
    | 'Collège'
    | 'Lycée'
    | 'Articles'
    | 'Visite'
    | 'Pensionnat'
    | 'Village'
    | 'unima';

export interface Article {
    id: number | null;
    title: string;
    content: string;
    createdAt: Date | string | null;
    imgUrl: string | null;
    author: string | null;
    likes: number;
    visited: number;
    category: ArticleCategory;
    Commentaires?: Commentaire[];
}

export interface Commentaire {
    id: number | null;
    articleId: number | null;
    content: string;
    author: string | null;
    createdAt: Date | string | null;
}