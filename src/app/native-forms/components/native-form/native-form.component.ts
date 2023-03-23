import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'lect-native-form',
    templateUrl: './native-form.component.html',
    styleUrls: ['./native-form.component.scss']
})
export class NativeFormComponent {

    public formCode = `
    <form action="" method="get">
        <div>
            <label for="name">Enter your name: </label>
            <input type="text" name="name" id="name" required>
        </div>
        <div>
            <label for="email">Enter your email: </label>
            <input type="email" name="email" id="email" required>
        </div>
        <div>
            <label for="email">Enter your date of birth: </label>
            <input type="date" name="date" id="date">
        </div>
        <div>
            <input type="submit" value="Subscribe!">
        </div>
    </form>`

    @ViewChild("form") public form!: HTMLFormElement;
    public visibleFormCode = this.formCode.replaceAll("<", "&lt;").replaceAll(">", "&gt;");

    public usefullLinks = [
        {
            title: "<form> on MDN",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
        },
        {
            title: "Global attributes",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes"
        }
    ];

    public onsubmit(): void {
        console.log("this.form");
        console.log(this.form);
    }

    public trackByFn(_index: number, element: any): string {
        return element.title;
    }
}
