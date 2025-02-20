import { TestBed } from '@angular/core/testing';
import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartComponent],
    }).compileComponents();
  });

  it('should create chart component', () => {
    const fixture = TestBed.createComponent(ChartComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
