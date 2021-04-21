import {FirstFormData} from "../../pages/test-stepper/first-step/first-step.component";
import {SecondFormData} from "../../pages/test-stepper/second-step/second-step.component";
import {ThirdFormData} from "../../pages/test-stepper/therd-step/third-step.component";
import {Article} from "../../shared/model/article.interface";
import {UserData} from "../../pages/personal-info/personal-info.component";

export interface StepperState {
    firstStep: FirstFormData;
    secondStep: SecondFormData;
    thirdStep: ThirdFormData;
    articleList: Article[];
    userData: UserData;
}
