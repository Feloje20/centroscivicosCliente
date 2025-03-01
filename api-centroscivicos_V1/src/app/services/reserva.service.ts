import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environemnt.development';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = `${environment.baseUrl}reservas`;

  constructor(private http: HttpClient) {}

  // Método para obtener el token del almacenamiento local (o puedes cambiarlo según tu necesidad)
  private obtenerToken(): string | null {
    return localStorage.getItem('token');  // Asumiendo que el token está en el localStorage
  }

  // Método para crear las cabeceras con el token de autenticación
  private crearCabeceras(): HttpHeaders {
    const token = this.obtenerToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  obtenerReservas(): Observable<any[]> {
    const headers = this.crearCabeceras();  // Crear las cabeceras con el token
    return this.http.get<any[]>(this.apiUrl, { headers });  // Incluir las cabeceras en la solicitud GET
  }

  crearReserva(reserva: any): Observable<any> {
    const headers = this.crearCabeceras();  // Crear las cabeceras con el token
    return this.http.post<any>(this.apiUrl, reserva, { headers });  // Incluir las cabeceras en la solicitud POST
  }

  cancelarReserva(id: number): Observable<any> {
    const headers = this.crearCabeceras();  // Crear las cabeceras con el token
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });  // Incluir las cabeceras en la solicitud DELETE
  }
}
