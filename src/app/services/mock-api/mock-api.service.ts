import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Article} from "../../shared/model/article.interface";

const articles: Article[] = [
    { id: 1, name: "PCR-test 1", date: "19.04.2021", count: 0, description: "test 1 desc", price: 1 },
    { id: 2, name: "PCR-test 2", date: "19.04.2021", count: 0, description: "test 2 desc", price: 2 },
    { id: 3, name: "PCR-test 3", date: "19.04.2021", count: 0, description: "test 3 desc", price: 3 },
    { id: 4, name: "PCR-test 4", date: "20.04.2021", count: 0, description: "test 4 desc", price: 4 },
    { id: 5, name: "PCR-test 5", date: "24.04.2021", count: 0, description: "test 5 desc", price: 5 },
    { id: 6, name: "PCR-test 5", date: "25.04.2021", count: 0, description: "test 6 desc", price: 6 },
];


@Injectable({
    providedIn: "root"
})
export class MockApiService {

    constructor() {
    }

    getArticlesList(date: string): Observable<Article[]> {
        return of(articles.filter(a => a.date === date) );
    }
}
