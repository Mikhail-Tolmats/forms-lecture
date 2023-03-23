import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector: 'lect-simple-reactive-form',
    templateUrl: './simple-reactive-form.component.html',
    styleUrls: ['./simple-reactive-form.component.scss']
})
export class SimpleReactiveFormComponent {

    constructor(
        private formBuilder: FormBuilder
    ) { }

    public simpleFormGroup: FormGroup = new FormGroup({
        login: new FormControl(),
        password: new FormControl(),
    });

    public simpleFormbuilderGroup = this.formBuilder.group({
        login: new FormControl(),
        password: new FormControl(),
    });
}
