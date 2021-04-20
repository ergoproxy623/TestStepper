import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IStore} from "../store";
import {StepperState} from "./stepperState.interface";

export const stepperStateSelector = createFeatureSelector<IStore, StepperState>("stepperState");

export const isFirstStepStateSelector = createSelector(
    stepperStateSelector,
    (stepperState: StepperState) => stepperState.firstStep
);

export const isSecondStepStateSelector = createSelector(
    stepperStateSelector,
    (stepperState: StepperState) => stepperState.secondStep
);

export const isFirstStepStateDateSelector = createSelector(
    stepperStateSelector,
    (stepperState: StepperState) => stepperState?.firstStep?.date
);

export const isArticleListSelector = createSelector(
    stepperStateSelector,
    (stepperState: StepperState) => stepperState?.articleList
);


export const isThirdStepStateSelector = createSelector(
    stepperStateSelector,
    (stepperState: StepperState) => stepperState.thirdStep
);
