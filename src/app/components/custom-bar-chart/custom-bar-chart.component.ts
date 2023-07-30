import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DataService } from '../../services/data.service';
import { DailyArduinoDetection } from '../../models/DailyArduinoDetection';
import { GroupedArduinoDetection } from '../../models/GroupedArduinoDetection';

@Component({
  selector: 'app-custom-bar-chart',
  templateUrl: './custom-bar-chart.component.html',
  styleUrls: ['./custom-bar-chart.component.scss'],
})
export class CustomBarChartComponent implements OnInit {
  public chart: any;
  public selectedOption: 'daily' | 'range' = 'daily'; // Default to daily option
  public selectedDate: Date = new Date();
  public startDate: Date = new Date();
  public endDate: Date = new Date();
  public data!: DailyArduinoDetection;
  public datesModified: boolean = false; // Add this variable

  constructor(private dataService: DataService) {
    this.startDate.setDate(this.startDate.getDate() - 30);
  }

  ngOnInit(): void {
    this.getDataAndUpdateChart();
  }

  onOptionChange() {
    if (this.chart) {
      this.chart.destroy();
    }
    this.getDataAndUpdateChart();
  }

  onDateChange() {
    this.datesModified = true; // Set datesModified to true when dates are changed
  }

  getDataAndUpdateChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    if (this.selectedOption === 'daily') {
      const formattedDate = this.formatDate(this.selectedDate);

      this.dataService.getDataForDay(formattedDate).subscribe((data: DailyArduinoDetection) => {
        this.data = data;
        const labels = this.data.totalPerHoursInput.map((_, index) => `${index}:00`);
        const inputValuesData = this.data.totalPerHoursInput;
        const outputValuesData = this.data.totalPerHoursOutput;

        this.chart = new Chart('MyChart', {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Totale KW prodotti (INPUT)',
                data: inputValuesData,
                backgroundColor: 'blue',
              },
              {
                label: 'Totale KW consumati (OUTPUT)',
                data: outputValuesData,
                backgroundColor: 'red',
              },
            ],
          },
          options: {
            aspectRatio: 3,
          },
        });
      });
    } else if (this.selectedOption === 'range') {
      this.dataService
        .getDataForRange(
          this.formatDate(this.startDate),
          this.formatDate(this.endDate)
        )
        .subscribe((data: GroupedArduinoDetection[]) => {
          const uniqueDates = Array.from(
            new Set(data.flatMap(item => item.detections.map(d => d.date.slice(0, 10))))
          );

          const labels = uniqueDates;
          const inputValuesData = uniqueDates.map(date =>
            this.getTotalValue(data, date, 'INPUT')
          );

          const outputValuesData = uniqueDates.map(date =>
            this.getTotalValue(data, date, 'OUTPUT')
          );

          this.chart = new Chart('MyChart', {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Totale KW prodotti (INPUT)',
                  data: inputValuesData,
                  backgroundColor: 'blue',
                },
                {
                  label: 'Totale KW consumati (OUTPUT)',
                  data: outputValuesData,
                  backgroundColor: 'red',
                },
              ],
            },
            options: {
              aspectRatio: 3,
            },
          });
        });
    }

    // After getting the data and updating the chart, reset datesModified to false
    this.datesModified = false;
  }

  getTotalValue(data: GroupedArduinoDetection[], day: string, type: 'INPUT' | 'OUTPUT'): number {
    const matchingItem = data.find(item => item.day.includes(day));
    if (matchingItem) {
      return type === 'INPUT' ? matchingItem.totalInput : matchingItem.totalOutput;
    }
    return 0;
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}
