import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/all', { headers: this.getHeaders() });
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + `/${id}`, { headers: this.getHeaders() });
  }

  createUser(newUser: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, newUser, { headers: this.getHeaders() });
  }

  updateUser(id: number, updatedUser: User): Observable<User> {
    return this.http.put<User>(this.baseUrl + `/${id}`, updatedUser, { headers: this.getHeaders() });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `/${id}`, { headers: this.getHeaders() });
  }
}
