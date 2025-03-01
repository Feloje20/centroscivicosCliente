import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environemnt.development'; // Importa tu archivo de entorno
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private apiUrl = `${environment.baseUrl}inscripciones`; // Ruta de la API para las inscripciones

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

  crearInscripcion(inscripcion: any): Observable<any> {
    const headers = this.crearCabeceras();  // Crear las cabeceras con el token
    return this.http.post<any>(this.apiUrl, inscripcion, { headers });  // Método POST para crear una nueva inscripción
  }

  obtenerInscripciones(): Observable<any[]> {
    const headers = this.crearCabeceras();  // Crear las cabeceras con el token
    return this.http.get<any[]>(this.apiUrl, { headers });  // Método GET para obtener las inscripciones
  }

  eliminarInscripcion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
