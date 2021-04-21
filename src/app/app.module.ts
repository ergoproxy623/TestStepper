import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {environment} from "src/environments/environment";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {CustomRouterSerializer} from "./storage/router/router.reducers";
import {ReducerConfiguration, ReducerMap} from "./storage/reducer-configuration";
import {EffectsConfiguration} from "./storage/effects-configuration";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import {TestStepperComponent} from "./pages/test-stepper/test-stepper.component";
import {NgxMultiselectModule} from "@ngx-lib/multiselect";
import {FirstStepComponent} from "./pages/test-stepper/first-step/first-step.component";
import {SecondStepComponent} from "./pages/test-stepper/second-step/second-step.component";
import {ThirdStepComponent} from "./pages/test-stepper/therd-step/third-step.component";
import {CalendarModule} from "primeng/calendar";
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { SummaryComponent } from './pages/summary/summary.component';



@NgModule({
    declarations: [
        AppComponent,
        TestStepperComponent,
        FirstStepComponent,
        SecondStepComponent,
        ThirdStepComponent,
        PersonalInfoComponent,
        SummaryComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        NgxMultiselectModule,
        StoreModule.forRoot(ReducerMap, ReducerConfiguration),
        EffectsModule.forRoot(EffectsConfiguration),
        StoreDevtoolsModule.instrument({
            maxAge: 50,
            logOnly: environment.production,
        }),
        AppRoutingModule,
        StoreRouterConnectingModule.forRoot({
            serializer: CustomRouterSerializer,
        }),
        BrowserAnimationsModule,
        CalendarModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
