import {Component} from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  selectedChart: string = 'daily'; // Imposta il valore predefinito per il grafico giornaliero
}
