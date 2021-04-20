export interface IArticle {
    id: number,
    name: string;
    date: string;
    description: string;
    price: number;
    count: number;
}

export class Article implements IArticle{
    id: number;
    date: string;
    description: string;
    name: string;
    price: number;
    count: number;
}
