import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environemnt.development';

@Injectable({
  providedIn: 'root'
})
export class CentroService {
  private baseUrl = environment.baseUrl; // Asegúrate de definir esta variable de entorno

  constructor(private http: HttpClient) {}

  // Obtener la lista de centros cívicos
  getCentros(): Observable<any> {
    return this.http.get(`${this.baseUrl}centros`);
  }

  // Método para obtener un centro específico por id
  getCentroById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}centros/${id}`);
  }

   // Obtener las instalaciones de un centro por ID
   getInstalacionesByCentroId(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}centros/${id}/instalaciones`);
  }

  // Obtener todas las instalaciones sin filtro
  getInstalaciones(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}instalaciones`);
  }

  // Obtener todas las actividades sin filtro
  getActividades(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}actividades`);
  }

  // Obtener todas las actividades de un centro específico
  getActividadesByCentro(centroId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}centros/${centroId}/actividades`);
  }

}