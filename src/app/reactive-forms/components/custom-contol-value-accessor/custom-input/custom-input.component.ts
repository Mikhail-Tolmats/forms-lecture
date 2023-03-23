import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html',
    styleUrls: ['./custom-input.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CustomInputComponent,
        multi: true
    }]
})
export class CustomInputComponent implements ControlValueAccessor {
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
    ) { }

    public value!: string | null;

    private _onChange = (value: string | null) => undefined;
    private _onTouched = () => undefined;

    ngOnInit(): void {
    }

    public writeValue(value: any): void {
        this.value = value;
        this._onChange(value);
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
    }

    public registerOnChange(fn: (value: string | null) => undefined): void {
        console.log("registerOnChange");
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {
        console.log("registerOnTouched");
        this._onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        console.log("setDisabledState:", isDisabled);
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
}
