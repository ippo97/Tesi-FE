import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthToken } from '../models/AuthToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080'; // URL del tuo backend

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthToken> {
    const loginData = { email, password };

    return this.http.post<AuthToken>(`${this.apiUrl}/api/login`, loginData).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }
}
