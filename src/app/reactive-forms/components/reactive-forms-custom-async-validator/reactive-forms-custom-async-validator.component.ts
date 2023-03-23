import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, delay, map, of, tap, } from 'rxjs';

const FORBIDDEN_NAMES = new Set(["admin", "superadmin", "Vasya"]);

let counter = 0;

function ForbiddenNamesValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const value = control.value;    
    return of(value).pipe(
        delay(2000),
        map((result) => FORBIDDEN_NAMES.has(result) ? { nameIsForbidden: true } : null),
        tap(() => console.log(counter++)),
    );
};


@Component({
    selector: 'lect-reactive-forms-custom-async-validator',
    templateUrl: './reactive-forms-custom-async-validator.component.html',
    styleUrls: ['./reactive-forms-custom-async-validator.component.scss']
})
export class ReactiveFormsCustomAsyncValidatorComponent {
    public showStatus = false;

    public customSyncValidatedForm: FormGroup = new FormGroup({
        login: new FormControl("", [
            Validators.required
        ], ForbiddenNamesValidator),
    });

    public onSubmitBuiltInValidationForm(): void {
        console.log("customSyncValidatedForm.value");
        console.log(this.customSyncValidatedForm.value);
    }
}
