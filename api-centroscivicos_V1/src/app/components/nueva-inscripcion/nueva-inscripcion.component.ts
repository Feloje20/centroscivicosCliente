import { Component } from '@angular/core';
import { InscripcionService } from '../../services/inscripcion.service'; // Servicio para crear la inscripción
import { Router } from '@angular/router'; // Para redirigir después de crear la inscripción
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { GuardaIdsService } from '../../services/guarda-ids.service';
import { Location } from '@angular/common'; // Importamos Location

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

  constructor(
    private inscripcionService: InscripcionService,
    private guardaIdsService: GuardaIdsService,
    private location: Location, // Inyectamos Location
    private router: Router
  ) {
    // Obtener el id de la actividad desde el servicio
    this.idActividad = this.guardaIdsService.getIdActividad();
    if (this.idActividad) {
      this.inscripcion.id_actividad = this.idActividad.toString();
    }
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
