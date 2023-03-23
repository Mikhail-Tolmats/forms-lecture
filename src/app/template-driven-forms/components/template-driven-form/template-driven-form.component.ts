import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'lect-template-driven-form',
    templateUrl: './template-driven-form.component.html',
    styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

    public simpleNgModelValue = "I am value!";

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm): void {
        console.log("form ", form);
    }
}
