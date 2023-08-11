import {Component, OnInit} from '@angular/core';
import { ArduinoDetection } from 'src/app/models/ArduinoDetection';
import { DataService } from 'src/app/services/data.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  selectedChart: string = 'daily'; // Imposta il valore predefinito per il grafico giornaliero
 
}
