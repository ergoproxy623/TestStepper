import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TestStepperComponent} from "./pages/test-stepper/test-stepper.component";
import {PersonalInfoComponent} from "./pages/personal-info/personal-info.component";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "stepper",
    },
    {
        path: "stepper",
        component: TestStepperComponent,
    },
    {
        path: "personal-info",
        component: PersonalInfoComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
