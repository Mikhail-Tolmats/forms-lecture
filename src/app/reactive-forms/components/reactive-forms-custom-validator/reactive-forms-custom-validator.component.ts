import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export function EdgeSpacesValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        const value: string = (control.value || "");
        const valueLength = value.length;
        if (!valueLength) {
            return null;
        }

        const noSpaceValueLength = value.trim().length;

        return noSpaceValueLength !== valueLength ? { edgeSpacesError: true} : null;
    };
}

export function PasswordCustomValidator(notAllowedValue: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        const value: string = (control.value || "");
        return value === notAllowedValue ? { passwordError: true} : null;
    };
}

@Component({
  selector: 'lect-reactive-forms-custom-validator',
  templateUrl: './reactive-forms-custom-validator.component.html',
  styleUrls: ['./reactive-forms-custom-validator.component.scss']
})
export class ReactiveFormsCustomValidatorComponent {

    public forBiddenPassword = "qwerty123";

    public customSyncValidatedForm: FormGroup = new FormGroup({
        login: new FormControl("", [
            Validators.required,
            EdgeSpacesValidator(),
        ]),
        password: new FormControl("", [
            Validators.required,
            PasswordCustomValidator(this.forBiddenPassword),
        ]),
    });

    public onSubmitBuiltInValidationForm(): void {
        console.log("customSyncValidatedForm.value");
        console.log(this.customSyncValidatedForm.value);
    }
}
