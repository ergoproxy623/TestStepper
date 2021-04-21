import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {SaveUserDataAction} from "../../storage/stepper/stepper.actions";

export interface UserData {
    name: string;
    agree: boolean;
    adult: boolean;
    dob: string;
    comment: string;
}


@Component({
    selector: "app-personal-info",
    templateUrl: "./personal-info.component.html",
    styleUrls: ["./personal-info.component.scss"]
})
export class PersonalInfoComponent implements OnInit {
    userForm: FormGroup = this.fb.group({
        name: [null, [Validators.required]],
        agree: [false, [Validators.required]],
        adult: [false, [Validators.required]],
        dob: [null],
        comment: [null],
    });

    constructor(
        private fb: FormBuilder,
        private store: Store,
    ) {
    }

    ngOnInit(): void {
    }

    submitForm() {
        console.log(this.userForm.value);
        if (this.userForm.invalid) {
            this.userForm.markAllAsTouched();
            return;
        }
        const value = this.userForm.value;
        value.dob = new Date(value.dob).toLocaleDateString();
        this.store.dispatch(SaveUserDataAction({userData: value}));
    }
}
