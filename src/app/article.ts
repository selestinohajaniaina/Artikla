export type ArticleCategory =
    | 'College'
    | 'Lycée'
    | 'Articles'
    | 'Visite'
    | 'Penssionat'
    | 'Village'
    | 'unima'
    | 'Creer un article'
    | 'Contacter';

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
    commentaires?: commentaires[];
}

export interface commentaires {
    id: number | null;
    articleId: number | null;
    content: string;
    author: string | null;
    createdAt: Date | string | null;
}