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
    note: number;
    views: number;
    category: ArticleCategory;
}
