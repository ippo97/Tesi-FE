import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroupedArduinoDetection } from '../models/GroupedArduinoDetection';
import { DailyArduinoDetection } from '../models/DailyArduinoDetection';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getDataForDay(day: string): Observable<DailyArduinoDetection> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get<DailyArduinoDetection>(
      `${this.baseUrl}/detection/findAllByDay/${day}`,
      { headers: headers }
    );
  }

  getDataForRange(
    start: string,
    end: string
  ): Observable<GroupedArduinoDetection[]> {
    const token = localStorage.getItem('token');
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : undefined;
    const url = `${this.baseUrl}/detection/findAllByRange/${start}/${end}`;
    return this.http.get<GroupedArduinoDetection[]>(url, { headers });
  }
}
