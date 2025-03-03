import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardaIdsService {
  // El propósito de este servicio es guardar el id de la actividad e inscripción en el que el usuario se inscribirá
  private idActividad: number | null = null;
  private idInstalacion: number | null = null;

  setIdActividad(id: number) {
    this.idActividad = id;
  }

  getIdActividad(): number | null {
    return this.idActividad;
  }

  setIdInstalacion(id: number) {
    this.idInstalacion = id;
  }

  getIdInstalacion(): number | null {
    return this.idInstalacion;
  }
}
