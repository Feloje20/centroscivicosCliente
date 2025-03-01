import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { environment } from '../environments/environemnt.development';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  // Método para registrar un usuario
  register(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}register`, usuario);
  }

  // Método para logear un usuario
  login(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}login`, usuario);
  }

  // Método para refrescar el token
  refreshToken(): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}token/refresh`, {}, { responseType: 'json' });
  }

  // Método para obtener la información de un usuario, debe estar logeado
  getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}user`);
  }

  // Método para actualizar un usuario
  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrl}user`, usuario);
  }

  // Método para borrar un usuario
  delete(): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.baseUrl}user`);
  }
}
