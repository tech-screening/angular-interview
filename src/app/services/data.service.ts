import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getMockData() {
    return [
      { name: 'Category A', value: 50 },
      { name: 'Category B', value: 30 },
      { name: 'Category C', value: 20 }
    ];
  }
}