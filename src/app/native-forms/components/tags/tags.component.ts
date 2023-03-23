import { Component } from '@angular/core';
import { tags } from './tags.constants';

@Component({
    selector: 'lect-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
    public tags = tags;

    public meterSliderValue = 75;

    public onInputChange(value: string): void {
        this.meterSliderValue = +value;
    }
}
