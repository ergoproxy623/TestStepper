import {Component, forwardRef} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: "app-custom-increment-control",
    templateUrl: "./custom-increment-control.component.html",
    styleUrls: ["./custom-increment-control.component.scss"],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CustomIncrementControlComponent),
        multi: true
    }]

})
export class CustomIncrementControlComponent {
    value = 0;
    disabled = false;
    private onChange(_: any) {}
    private onTouched = () => {
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    writeValue(outsideValue: number) {
        this.value = outsideValue;
    }

    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

    updateValue(insideValue: number) {
        this.value = insideValue >= 0 ? insideValue : 0;
        this.onChange(insideValue >= 0 ? insideValue : 0);
        this.onTouched();
    }

}
