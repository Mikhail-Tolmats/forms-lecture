import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'lect-standalone-reactive-input',
    templateUrl: './standalone-reactive-input.component.html',
    styleUrls: ['./standalone-reactive-input.component.scss']
})
export class StandaloneReactiveInputComponent implements OnInit {
    public standAloneInput = new FormControl();
    constructor() { }

    ngOnInit(): void {
        this.standAloneInput.valueChanges.subscribe((res) => {
            console.log("standAloneInput value");
            console.log(res);
        });
    };

    public setStandloneInputValue(): void {
        this.standAloneInput.setValue("Value from `setValue`");

        setTimeout(() => {
            this.standAloneInput.patchValue("Value from `patchValue`");
        }, 5000);
    };

}
