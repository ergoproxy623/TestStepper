import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {filter, map, switchMap, tap, withLatestFrom} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {
    getArticlesListAction,
    MergeStepperStateAction,
    updateFirstStepAction,
    updateSecondStepAction,
    updateThirdStepAction
} from "./stepper.actions";
import {isArticleListSelector, isFirstStepStateDateSelector} from "./stepper.selectors";
import {MockApiService} from "../../services/mock-api/mock-api.service";
import {Article} from "../../shared/model/article.interface";

@Injectable()
export class StepperEffect {

    updateFirstStep$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateFirstStepAction),
            map((firstStepData) => {
                this.store.dispatch(getArticlesListAction());
                return MergeStepperStateAction ({
                    newState: {
                        firstStep: firstStepData.firstStep,
                    }
                });
            })
        );
    });

    getArticleList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getArticlesListAction),
            withLatestFrom(this.store.pipe(select(isFirstStepStateDateSelector))),
            map(([type, date]) => date),
            switchMap( date => this.mockApiService.getArticlesList(date)),
            map( arr => {
                return MergeStepperStateAction({
                    newState: {
                        articleList: arr
                    }
                });
            })
        );
    });

    updateSecondStep$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateSecondStepAction),
            map((secondStepData) => {
                return MergeStepperStateAction ({
                    newState: {
                        secondStep: secondStepData.secondStep,
                    }
                });
            })
        );
    });

    updateThirdStep$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateThirdStepAction),
            withLatestFrom(this.store.pipe(select(isArticleListSelector))),
            map(([data, articleList]) => {
                const listCopy = JSON.parse(JSON.stringify(articleList))
                listCopy.forEach( a => {
                    a.count  = data.thirdStep[a.id];
                });
                return MergeStepperStateAction ({
                    newState: {
                        articleList: listCopy,
                    }
                });
            })
        );
    });


    constructor(
        private actions$: Actions,
        private store: Store,
        private mockApiService: MockApiService,
    ) {
    }
}
