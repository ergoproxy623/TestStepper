import {Component, OnInit, ViewChild} from "@angular/core";
import {FirstFormData, FirstStepComponent} from "./first-step/first-step.component";
import {SecondStepComponent} from "./second-step/second-step.component";
import {ThirdStepComponent} from "./therd-step/third-step.component";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isFirstStepStateDateSelector} from "../../storage/stepper/stepper.selectors";
import {StepperSelectionEvent} from "@angular/cdk/stepper";
import {updateFirstStepAction} from "../../storage/stepper/stepper.actions";

@Component({
    selector: "app-test-stepper",
    templateUrl: "./test-stepper.component.html",
    styleUrls: ["./test-stepper.component.scss"]
})
export class TestStepperComponent implements OnInit {

    @ViewChild("step1", {static: true}) stepOne: FirstStepComponent;
    @ViewChild("step2", {static: true}) stepTwo: SecondStepComponent;
    @ViewChild("step3", {static: true}) stepThree: ThirdStepComponent;
    selectedDate$: Observable<string>;

    constructor(
        private store: Store,
    ) {
    }

    ngOnInit() {
        this.selectedDate$ = this.store.pipe(select(isFirstStepStateDateSelector));
    }

    selectStep(event: StepperSelectionEvent) {
        if (event.previouslySelectedIndex === 0) {
            const firstFormData: FirstFormData = JSON.parse(JSON.stringify(event.previouslySelectedStep.stepControl.value));
            firstFormData.date = new Date(firstFormData.date).toLocaleDateString();
            this.store.dispatch(updateFirstStepAction( { firstStep: firstFormData }) );
        }
    }
}
