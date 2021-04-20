import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Article} from "../../../shared/model/article.interface";
import {debounceTime, distinctUntilChanged, tap} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {isArticleListSelector} from "../../../storage/stepper/stepper.selectors";
import {NavigateAction} from "../../../storage/router/router.actions";
import {updateThirdStepAction} from "../../../storage/stepper/stepper.actions";

export interface ThirdFormData {
    thirdStep: any[];
}

@Component({
    selector: "app-third-step",
    templateUrl: "./third-step.component.html",
    styleUrls: ["./third-step.component.scss"]
})
export class ThirdStepComponent implements OnInit {

    thirdFormGroup: FormGroup = this.formBuilder.group({});
    displayedColumns: string[] = ["name", "weight", "symbol", "summary"];
    showData$: Observable<Article[]> = this.store.pipe(select(isArticleListSelector));

    constructor(
        private formBuilder: FormBuilder,
        private store: Store,
    ) {
    }

    ngOnInit(): void {
        this.showData$
            .pipe(
                distinctUntilChanged(),
                tap((arr) => {
                    if (arr) {
                        this.thirdFormGroup = null;
                        this.thirdFormGroup = this.formBuilder.group({});
                        arr.forEach( (o: Article) => {
                            this.thirdFormGroup.addControl( o.id.toString(), this.formBuilder.control(o.count));
                        });
                        this.thirdFormGroup.valueChanges
                            .subscribe( v => {
                                console.log(v);
                                this.store.dispatch(updateThirdStepAction({ thirdStep: v }));
                            })
                    }
                }),
                debounceTime(100)
            )
            .subscribe();
    }

    completeStepper() {
        this.store.dispatch(NavigateAction({
            payload: {
                path: ["/personal-info"]
            }
        }));
    }
}
