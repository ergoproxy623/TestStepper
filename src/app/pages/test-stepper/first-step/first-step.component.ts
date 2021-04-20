import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {filter, tap} from "rxjs/operators";
import {isFirstStepStateSelector} from "../../../storage/stepper/stepper.selectors";
import {updateFirstStepAction} from "../../../storage/stepper/stepper.actions";

export interface FirstFormData {
    productSelected: any;
    date: string;
}

@Component({
    selector: "app-first-step",
    templateUrl: "./first-step.component.html",
    styleUrls: ["./first-step.component.scss"]
})
export class FirstStepComponent implements OnInit {
    firstFormGroup: FormGroup = this.fb.group({
        productSelect: [null, Validators.required],
        date: [null, Validators.required],
    });

    constructor(
        private fb: FormBuilder,
        private store: Store,
    ) {
    }

    ngOnInit(): void {

        this.store
            .select(isFirstStepStateSelector)
            .pipe(
                filter(v => !!v),
                tap(firstFormData => {
                    console.log(firstFormData);
                    this.firstFormGroup.patchValue(firstFormData, {emitEvent: false});
                })
            )
            .subscribe();

    }

    nextStep() {
        if (this.firstFormGroup.invalid) {
            return;
        }
        const firstFormData: FirstFormData = JSON.parse(JSON.stringify(this.firstFormGroup.value));
        firstFormData.date = new Date(firstFormData.date).toLocaleDateString();
        this.store.dispatch(updateFirstStepAction({firstStep: firstFormData}));
    }

}
