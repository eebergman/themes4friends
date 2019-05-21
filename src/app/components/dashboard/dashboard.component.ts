import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'the-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Card 1',
            content: 'Card One Content',
            cols: 1,
            rows: 1
          },
          {
            title: 'Card 2',
            content: 'Card Two Content',
            cols: 1,
            rows: 1
          },
          {
            title: 'Card 3',
            content: '<img src="./assets/free_cat.jpeg" width="200" />',
            cols: 1,
            rows: 1
          },
          {
            title: 'Card 4',
            content: 'Card Four Content',
            cols: 1,
            rows: 1
          }
        ];
      }

      return [
        {
          title: 'Card 1',
          content: 'Card One Content',
          cols: 2,
          rows: 1
        },
        {
          title: 'Card 2',
          content: 'Card Two Content',
          cols: 1,
          rows: 1
        },
        {
          title: 'Card 3',
          content: '<img src="./assets/free_cat.jpeg" width="300" />',
          cols: 1,
          rows: 2
        },
        {
          title: 'Card 4',
          content: 'Card Four Content',
          cols: 1,
          rows: 1
        }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
