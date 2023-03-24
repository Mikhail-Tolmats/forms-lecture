import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

const fieldsEqualityValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const nameValue = control.get('login')?.value;
    const passwordValue = control.get('password')?.value;

    return nameValue === passwordValue ? { fieldsEquality: true } : null;
};

@Component({
    selector: 'app-reactive-forms-cross-field-validator',
    templateUrl: './reactive-forms-cross-field-validator.component.html',
    styleUrls: ['./reactive-forms-cross-field-validator.component.scss']
})
export class ReactiveFormsCrossFieldValidatorComponent implements OnInit {

    public crossFieldValidationForm: FormGroup = new FormGroup({
        login: new FormControl(),
        // password: new FormControl("", {updateOn: "blur"}),
        password: new FormControl(""),
    }, { validators: fieldsEqualityValidator });

    ngOnInit(): void {
        const isDynamicValidationEnabled = false;
        this.enableDynamicValidation(isDynamicValidationEnabled);

        // this.crossFieldValidationForm.get("login")?.disable(); // To show that this adds disabled attribute
    }

    public onSubmitBuiltInValidationForm(): void {
        console.log("crossFieldValidationForm.value");
        console.log(this.crossFieldValidationForm.value);
    }

    private enableDynamicValidation(isDynamicValidationEnabled: boolean): void {
        if (!isDynamicValidationEnabled) {
            return;
        }

        const loginControl = this.crossFieldValidationForm.get("login") as FormControl;
        const passwordControl = this.crossFieldValidationForm.get("password") as FormControl;

        loginControl.valueChanges.subscribe((res) => {
            console.log("Login Field changes result: ", res);
            const validators = res.length % 2 === 1 ? [Validators.required, Validators.minLength(2)] : [Validators.required, Validators.email];
            passwordControl.setValidators(validators);
            passwordControl.updateValueAndValidity();
        });

        passwordControl.valueChanges.subscribe((res) => console.log("Password Field changes result: ", res));
    }
}
