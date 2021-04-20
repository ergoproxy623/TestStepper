import {RouterState} from "./router/router.state";
import {StepperState} from "./stepper/stepperState.interface";

export interface IStore {
    router: RouterState;
    stepperState: StepperState;
}
