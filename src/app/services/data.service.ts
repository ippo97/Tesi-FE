import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) {}

  getDataForDay(day: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/detection/findAllByDay/${day}`);
  }
}
