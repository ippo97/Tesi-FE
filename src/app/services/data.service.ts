import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getDataForDay(day: string): Observable<any[]> {
    // Recupera il token dalla local storage di Angular
    const token = localStorage.getItem('token');

    // Verifica se il token è presente e valido
    if (token) {
      // Aggiungi l'header "Authorization" con il valore del token alla richiesta HTTP
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
      
      // Esegui la richiesta HTTP con l'header "Authorization"
      return this.http.get<any[]>(`${this.baseUrl}/detection/findAllByDay/${day}`, { headers: headers });
    } else {
      // Se il token non è presente, esegui semplicemente la richiesta HTTP senza l'header "Authorization"
      return this.http.get<any[]>(`${this.baseUrl}/detection/findAllByDay/${day}`);
    }
  }
}