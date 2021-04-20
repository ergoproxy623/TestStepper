import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {isFirstStepStateSelector, isSecondStepStateSelector} from "../../../storage/stepper/stepper.selectors";
import {distinctUntilChanged, filter, map, take, tap} from "rxjs/operators";
import {updateFirstStepAction, updateSecondStepAction} from "../../../storage/stepper/stepper.actions";
import {Store} from "@ngrx/store";

export interface SecondFormData {
    empty: Date;
}

@Component({
    selector: "app-second-step",
    templateUrl: "./second-step.component.html",
    styleUrls: ["./second-step.component.scss"]
})
export class SecondStepComponent implements OnInit {
    secondFormGroup: FormGroup  = this.formBuilder.group({
        empty: [null]
    });

    constructor(
        private formBuilder: FormBuilder,
        private store: Store,
    ) {
    }

    ngOnInit(): void {
        this.store
            .select(isSecondStepStateSelector)
            .pipe(
                filter( v => !!v ),
                tap( secondFormData => {
                    this.secondFormGroup.patchValue(secondFormData, {emitEvent: false});
                })
            )
            .subscribe();


        this.secondFormGroup.valueChanges
            .pipe(
                distinctUntilChanged(),
                tap( v => this.store.dispatch(updateSecondStepAction( { second: v }) ) )
            )
            .subscribe();
    }

    nextStep() {
        if (this.secondFormGroup.invalid) {
            return;
        }
    }
}
