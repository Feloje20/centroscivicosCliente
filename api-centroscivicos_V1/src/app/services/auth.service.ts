import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environemnt.development';

@Injectable({
  providedIn: 'root'
})
/**
 * Service to handle authentication-related operations.
 */
export class AuthService {
  /**
   * Base URL for the API endpoints.
   */
  private baseUrl = environment.baseUrl;

  /**
   * Constructor to inject HttpClient.
   * @param http - HttpClient instance to make HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Logs in a user with the provided credentials.
   * @param credentials - Object containing email and password.
   * @returns Observable of the HTTP response.
   */
  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}login`, credentials);
  }

  /**
   * Saves the authentication token in local storage.
   * @param token - The authentication token to be saved.
   */
  saveToken(token: string): void {
    localStorage.setItem('token', token); 
  }

  /**
   * Retrieves the authentication token from local storage.
   * @returns The authentication token or null if not found.
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Logs out the user by removing the authentication token from local storage.
   */
  logout(): void {
    localStorage.removeItem('token'); 
  }

  /**
   * Refreshes the authentication token.
   * @returns Observable of the HTTP response.
   */
  refreshToken(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}token/refresh`, {});
  }

  /**
   * Registers a new user with the provided user data.
   * @param userData - Object containing usuario, email, and password.
   * @returns Observable of the HTTP response.
   */
  register(userData: { usuario: string, email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}register`, userData);
  }

  /**
   * Retrieves the authenticated user's data.
   * @returns Observable of the HTTP response.
   */
  getUserData(): Observable<any> {
    return this.http.get(`${this.baseUrl}user`, {
      headers: { Authorization: `Bearer ${this.getToken()}` }
    });
  }
  
  /**
   * Updates the authenticated user's data.
   * @param userData - Object containing usuario, email, and/or password.
   * @returns Observable of the HTTP response.
   */
  updateUser(userData: { usuario?: string; email?: string; password?: string }): Observable<any> {
    return this.http.put(`${this.baseUrl}user`, userData, {
      headers: { Authorization: `Bearer ${this.getToken()}` }
    });
  }
  
  /**
   * Deletes the authenticated user's account.
   * @returns Observable of the HTTP response.
   */
  deleteAccount(): Observable<any> {
    return this.http.delete(`${this.baseUrl}user`, {
      headers: { Authorization: `Bearer ${this.getToken()}` }
    });
  }
}
