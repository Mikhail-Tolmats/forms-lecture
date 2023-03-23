import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
    selector: 'lect-nested-reactive-form',
    templateUrl: './nested-reactive-form.component.html',
    styleUrls: ['./nested-reactive-form.component.scss']
})
export class NestedReactiveFormComponent implements OnInit {

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
    }

    public nestedForm = this.fb.group({
        name: this.fb.control(null),
        sureName: this.fb.control(null),
        skills: this.fb.array([
            this.fb.group({
                skillValue: this.fb.control(null),
            }),
            this.fb.group({
                skillValue: this.fb.control(null),
            }),
            this.fb.group({
                skillValue: this.fb.control(null),
            }),
        ]),
        publicInfo: this.fb.group({
            address: this.fb.control(null),
            phoneNumber: this.fb.control(null),
        }),
    });

    public get skills(): FormArray {
        return this.nestedForm.controls["skills"] as FormArray;
    }

    private nestedFormValue = {
        name: "Mikhail",
        sureName: "Tolmats",
        skills: [
            {
                skillValue: "HTML"
            },
            {
                skillValue: "CSS"
            },
            {
                skillValue: "JS"
            },
        ],
        publicInfo: {
            address: "Limassol, Cyprus, 3011",
            phoneNumber: "828373848",
        },
    }



    public submitNestedForm(): void {
        console.log("NestedForm");
        console.log(this.nestedForm);
    };

    public setValueToNestedForm(): void {
        this.nestedForm.setValue(this.nestedFormValue);
        // this.nestedForm.setValue(this.nestedFormValue);
    }

    public addSkill(): void {
        const newSkillGroup = this.fb.group({
            skillValue: this.fb.control(null),
        });

        this.skills.push(newSkillGroup);
    }

    public deleteSkill(i: number): void {
        this.skills.removeAt(i);
    }

}
