import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, switchMap, withLatestFrom} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {
    getArticlesListAction,
    MergeStepperStateAction, SaveUserDataAction,
    updateFirstStepAction,
    updateSecondStepAction,
    updateThirdStepAction
} from "./stepper.actions";
import {isArticleListSelector, isFirstStepStateDateSelector} from "./stepper.selectors";
import {MockApiService} from "../../services/mock-api/mock-api.service";
import {NavigateAction} from "../router/router.actions";

@Injectable()
export class StepperEffect {

    updateFirstStep$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateFirstStepAction),
            map((firstStepData) => {
                this.store.dispatch(getArticlesListAction());
                return MergeStepperStateAction({
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
            switchMap(date => this.mockApiService.getArticlesList(date)),
            map(arr => {
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
                return MergeStepperStateAction({
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
                const listCopy = JSON.parse(JSON.stringify(articleList));
                listCopy.forEach(a => {
                    a.count = data.thirdStep[a.id];
                });
                return MergeStepperStateAction({
                    newState: {
                        articleList: listCopy,
                    }
                });
            })
        );
    });

    saveUserData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SaveUserDataAction),
            map((userData) => {
                this.store.dispatch(NavigateAction({payload: {
                    path: ["/summary"]
                    }}));
                return MergeStepperStateAction({
                    newState: {
                        userData: userData.userData,
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
