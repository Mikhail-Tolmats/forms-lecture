import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'lect-reactive-forms-validation',
    templateUrl: './reactive-forms-validation.component.html',
    styleUrls: ['./reactive-forms-validation.component.scss']
})
export class ReactiveFormsValidationComponent {

    public builtInValidtionForm: FormGroup = new FormGroup({
        login: new FormControl("", [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern('[A-Z ]*'),
        ]),
        password: new FormControl("", [
            Validators.required,
            Validators.minLength(3),
        ]),
    });

    public onSubmitBuiltInValidationForm(): void {
        console.log("builtInValidtionForm.value");
        console.log(this.builtInValidtionForm.value);
    }
}
