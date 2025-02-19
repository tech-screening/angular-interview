import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
    data: any[] = [];

    constructor(private dataService: DataService) {
      this.data = this.dataService.getMockData();
    }
  }