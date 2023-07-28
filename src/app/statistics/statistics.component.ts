import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  selectedDate!: Date;
  chartData: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  loadChartData(): void {
    if (this.selectedDate) {
      const day = this.formatDate(this.selectedDate);

      this.dataService.getDataForDay(day).subscribe(
        (data) => {
          this.chartData = data.map((item) => {
            return {
              plantName: item.plantName,
              type: item.type,
              value: item.value
            };
          });
          this.displayChart();
        },
        (error) => {
          console.error('Error retrieving data:', error);
        }
      );
    }
  }

  displayChart(): void {
    // Code to display the chart using Chart.js
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${this.padNumber(month)}-${this.padNumber(day)}`;
  }

  private padNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
