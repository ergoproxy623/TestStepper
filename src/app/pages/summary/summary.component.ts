import {Component, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {UserData} from "../personal-info/personal-info.component";
import {isArticleListSelector, isUserDataSelector} from "../../storage/stepper/stepper.selectors";
import {Article} from "../../shared/model/article.interface";

@Component({
    selector: "app-summary",
    templateUrl: "./summary.component.html",
    styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent implements OnInit {
    displayedColumns: string[] = ["ticket", "price", "summary"];
    userData$: Observable<UserData> = this.store.pipe(select(isUserDataSelector));
    orderData$: Observable<Article[]> = this.store.pipe(select(isArticleListSelector));

    constructor(
        private store: Store,
    ) {
    }

    ngOnInit(): void {
    }

}
