import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[lectCustomPasswordValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomPasswordValidatorDirective, multi: true}]
})
export class CustomPasswordValidatorDirective implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
        if (control.value?.length < 5) {
            return {
                lengthMin: true,
                requiredLength: 10,
            }
        }

        if (control.value?.length > 10) {
            return {
                lengthMax: true,
                requiredLength: 10,
            }
        }

        if (control.value === "password") {
            return {
                passwordWordError: true,
                forbiddenValues: "password"
            }
        }

        return null;
    }
}
