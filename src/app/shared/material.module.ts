import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";

const exportableModules = [
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatRadioModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    ClipboardModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatFormFieldModule,
    MatStepperModule,
    MatNativeDateModule,
    MatIconModule
];

@NgModule({
    imports: [...exportableModules],
    exports: [...exportableModules],
})
export class MaterialModule {
}
