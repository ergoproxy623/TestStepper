import {createAction, props} from "@ngrx/store";
import {RecursivePartial} from "../recursive-partial";
import {StepperState} from "./stepperState.interface";
import {FirstFormData} from "../../pages/test-stepper/first-step/first-step.component";
import {SecondFormData} from "../../pages/test-stepper/second-step/second-step.component";
import {ThirdFormData} from "../../pages/test-stepper/therd-step/third-step.component";
import {UserData} from "../../pages/personal-info/personal-info.component";


export const updateFirstStepAction = createAction(
    "[Stepper] Update First Step",
    props<{ firstStep: FirstFormData }>(),
);

export const updateSecondStepAction = createAction(
    "[Stepper] Update Second Step",
    props<{ secondStep: SecondFormData}>(),
);

export const updateThirdStepAction = createAction(
    "[Stepper] Update Third Step",
    props<{  thirdStep: ThirdFormData}>(),
);

export const getArticlesListAction = createAction(
    "[Stepper] Get Articles List",
);

export const SaveUserDataAction = createAction(
    "[Stepper] Save User Data",
    props<{  userData: UserData}>(),
);


export const ExtendStepperStateAction = createAction(
    "[Stepper] Extend State",
    props<{ newState: Partial<StepperState> }>(),
);


export const MergeStepperStateAction = createAction(
    "[Stepper] Merge State",
    props<{ newState: RecursivePartial<StepperState> }>(),
);
