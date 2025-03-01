import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environemnt.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}login`, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token); // 🔥 Reemplazamos el token anterior
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token'); // Eliminamos solo el token al cerrar sesión
  }

  refreshToken(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}token/refresh`, {});
  }
}
