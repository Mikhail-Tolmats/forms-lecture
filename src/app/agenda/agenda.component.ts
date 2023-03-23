import { Component } from '@angular/core';
import { NativeFormsRoutes, Paths } from '../constants/paths';
import { AgendaElement, agendaElements } from '../constants/agenda-plan.constants';


@Component({
  selector: 'lect-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
    public agendaElements: AgendaElement[] = agendaElements;


    public trackByFn(_index: number, element: any): string {
        return element.title;
    }
}
