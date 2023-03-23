import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { AgendaElement, agendaElements } from './constants/agenda-plan.constants';

@Component({
  selector: 'lect-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router) {
        this.router.events.pipe(
            filter((url) => url instanceof NavigationEnd),
            // tap(console.log),
        ).subscribe();
    }

    public agendaElements: AgendaElement[] = agendaElements;

    public trackByFn(_index: number, element: any): string {
        return element.title;
    }
}
