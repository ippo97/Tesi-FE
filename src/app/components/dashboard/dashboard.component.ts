import {Component, OnInit} from '@angular/core';
import { ArduinoDetection } from 'src/app/models/ArduinoDetection';
import { DataService } from 'src/app/services/data.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedChart: string = 'daily'; // Imposta il valore predefinito per il grafico giornaliero
  lastDetection: ArduinoDetection = new ArduinoDetection("",0,"","");
  
  constructor(private dataService: DataService) {
    this.updateData();
  }
  
  ngOnInit(): void {
    interval(5000).subscribe(() => {
      this.updateData(); // Chiama la funzione per aggiornare il dato
    });
  }

  updateData(): void{
    this.dataService.getLastDetection().subscribe(
      (arduinoDetection)=> this.lastDetection = arduinoDetection
    );
  }
}
