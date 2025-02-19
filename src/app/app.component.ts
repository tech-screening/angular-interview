import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartComponent } from './components/chart/chart.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent, ChartComponent],
  template: `<main class="content">
        <section>
          <app-dashboard></app-dashboard>  
        </section>
        <hr/>
        <section>
          <app-chart></app-chart>  
        </section>
    </main>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'booking-ng';
}
