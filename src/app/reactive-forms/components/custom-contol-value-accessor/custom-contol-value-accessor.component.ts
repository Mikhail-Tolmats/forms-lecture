import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-custom-contol-value-accessor',
    templateUrl: './custom-contol-value-accessor.component.html',
    styleUrls: ['./custom-contol-value-accessor.component.scss']
})
export class CustomContolValueAccessorComponent implements OnInit {
    public formWithCustomControl: FormGroup = new FormGroup({
        login: new FormControl(333),
    });

    constructor() { }

    ngOnInit(): void {
        this.formWithCustomControl.valueChanges.subscribe((res) => {
            console.log("result");
            console.log(res);

            if (res.login.length === 5) {
                this.formWithCustomControl.get("login")?.disable({ onlySelf: true, emitEvent: false});
            } else {
                this.formWithCustomControl.get("login")?.enable({ onlySelf: true, emitEvent: false});
            }

            this.formWithCustomControl.updateValueAndValidity({emitEvent: false});
            console.log("this.formWithCustomControl");
            console.log(this.formWithCustomControl);
        });
    }
}
