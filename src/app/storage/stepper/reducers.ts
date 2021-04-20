import {Action, createReducer, on} from "@ngrx/store";
import * as StepperActions from "../stepper/stepper.actions";
import {recursive as mergeRecursive} from "merge";
import {StepperState} from "./stepperState.interface";

const reducerImplementation = createReducer(
    {} as StepperState,
    on(StepperActions.ExtendStepperStateAction, (state, {newState}) => ({...state, ...newState})),
    on(StepperActions.MergeStepperStateAction, (state, {newState}) => mergeRecursive(true, state, newState)),
);

export function stepperReducer(state: StepperState, action: Action) {
    return reducerImplementation(state, action);
}
