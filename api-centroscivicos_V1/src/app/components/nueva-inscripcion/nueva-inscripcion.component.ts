import { Component } from '@angular/core';
import { InscripcionService } from '../../services/inscripcion.service'; // Servicio para crear la inscripción
import { Router } from '@angular/router'; // Para redirigir después de crear la inscripción
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { GuardaIdsService } from '../../services/guarda-ids.service';
import { Location } from '@angular/common'; // Importamos Location
import { CentroService } from '../../services/centro.service';

@Component({
  selector: 'app-nueva-inscripcion',
  templateUrl: './nueva-inscripcion.component.html',
  styleUrls: ['./nueva-inscripcion.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Añadir CommonModule y FormsModule a los imports
})
export class NuevaInscripcionComponent {
  inscripcion = {
    nombre: '',
    telefono: '',
    id_actividad: '',
    fecha_inscripcion: '',
    estado: 'pendiente'
  };
  idActividad: number | null = null;
  nombreActividad = "";
  nombreCentro = '';

  constructor(
    private inscripcionService: InscripcionService,
    private guardaIdsService: GuardaIdsService,
    private location: Location, // Inyectamos Location
    private router: Router,
    private centroService: CentroService,
  ) {
    // Obtener el id de la actividad desde el servicio
    this.idActividad = this.guardaIdsService.getIdActividad();
    if (this.idActividad) {
      this.inscripcion.id_actividad = this.idActividad.toString();
    }

    // Obtenemos el nombre de la actividad y el centro
    // Primero recuperamos todas las actividades y guardamos la info de la correcta
    // Además recuperamos el nombre del centro de la actividad
    this.centroService.getActividades().subscribe((data) => {
      for (let actividad of data) {
        if (actividad.id === this.idActividad) {
          this.nombreActividad = actividad.nombre;
          this.centroService.getCentroById(actividad.id_centro).subscribe((data) => {
            this.nombreCentro = data.nombre;
          });
        }
      }
    });
  }

  crearInscripcion() {
    this.inscripcionService.crearInscripcion(this.inscripcion).subscribe((response) => {
      // Redirigir o mostrar mensaje de éxito
      this.router.navigate(['/inscripciones']);  // Volver a la vista de inscripciones
    });
  }

  // Método para ir a la página anterior
  goBack(): void {
    this.location.back();  // Vuelve a la página anterior
  }
}
