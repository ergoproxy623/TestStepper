import {HttpClient} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {MaterialModule} from "./material.module";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {CommonModule} from "@angular/common";
import {CustomIncrementControlComponent} from "./components/custom-increment-control/custom-increment-control.component";
import {MatIconModule} from "@angular/material/icon";
import {CalendarModule} from "primeng/calendar";
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

const exportableModules: any[] = [
    MaterialModule,
    TranslateModule.forRoot({
        defaultLanguage: "de",
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
];

@NgModule({
    declarations: [
        CustomIncrementControlComponent
    ],
    imports: [
        ...exportableModules,
        CommonModule,
        MatIconModule,
        CalendarModule
    ],
    exports: [...exportableModules, CustomIncrementControlComponent],
})
export class SharedModule {
}
