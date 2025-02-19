import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  data: any[] = [];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getMockData();
  }
}